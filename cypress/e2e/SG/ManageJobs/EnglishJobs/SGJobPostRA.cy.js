const Chance = require('chance'); 
const chance = new Chance();
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

let jobData;

describe("SG Job Posting DE", () => {
	const AccountType = "recruitmentAgency";

	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		jobData = {
            jobTitle: chance.profession(),
            jobDesc: chance.sentence({ words: 12 }) + " " + 'Updated',
            applyByEmail: chance.email(),
            applyByCallSms: '85556278',
            editedJobTitle: chance.profession() + " " + 'Updated',
        };
		const employerUrlSG = Cypress.env("employerSG");
		cy.checkWebsiteAvailability(employerUrlSG);
		cy.pageVisit(employerUrlSG);
		cy.employerLogin(Cypress.env("ra_username"), Cypress.env("ra_password"));
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.GoToJobListing();
	});

	afterEach(() => {
		//Expire the job after each testcase
		SGJobPostPage.GoToJobListing();
		cy.log('Expire Job')
		SGJobPostPage.VerifyPostedJobAd(jobData)
	})	

	it("Post new job ad and Edit with Agency information included", () => {
		const jobType = 'Active'

		SGJobPostPage.GotoPostNewJobForm();

		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,false, jobType)
		SGJobPostPage.ClickPostNewJobBtn();

		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Edit the Job
		SGJobPostPage.searchForJob(jobData);
		
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,true, jobType)

		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify schedule job functionality", () => {
		cy.log("Scheduling a job");
		const jobType = "Scheduled";
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,false, jobType)
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();
		//SGJobPostPage.VerifySuccessMsg();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		// Edit the Job
		SGJobPostPage.searchForJob(jobData);
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,true, jobType)
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.searchForJob(jobData)
		SGJobPostPage.RepostJob();
		SGJobPostPage.GoToJobListing();
		//SGJobPostPage.VerifySuccessMsg();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		const jobType = 'Active'
		SGJobPostPage.GotoPostNewJobForm();

		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,false, jobType)
		SGJobPostPage.ClickPostNewJobBtn();

		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.GoToJobListing();
		
		//search for the job
		SGJobPostPage.searchForJob(jobData);

		//Copy the same job
		SGJobPostPage.CopyTheJob();
		SGJobPostPage.ClickPostNewJobBtn();

		//Duplicate Job Error
		SGJobPostPage.VerifyDuplicateNotification();
		SGJobPostPage.ClickCancelButton();
		SGJobPostPage.VerifyJobListingPage();
	});
});


