const Chance = require('chance'); 
const chance = new Chance();
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

export let jobData;

describe("Job posting", () => {
	const AccountType = "parkingLot";

	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	// before(() => {
    //     // Generate random data and assign it to jobData
    //     jobData = {
    //         jobTitle: chance.profession(),
    //         jobDesc: chance.sentence({ words: 12 }) + " " + 'Updated',
    //         applyByEmail: chance.email(),
    //         applyByCallSms: '85556278',
    //         editedJobTitle: chance.profession() + " " + 'Updated',
    //     };
    // });

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
		cy.employerLogin(Cypress.env("pl_username"), Cypress.env("pl_password"));
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.GoToJobListing();
	});

	afterEach(() => {
		//Expire the job after each testcase
		SGJobPostPage.GoToJobListing();
		cy.log('Expire Job')
		SGJobPostPage.VerifyPostedJobAd(jobData)
	})

	it("Verify able to post and edit the job", () => {
		const jobType = "Active";
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,false, jobType)
		SGJobPostPage.ClickPostNewJobBtn();
		//SGJobPostPage.ConfirmSubmit();
		

		SGJobPostPage.VerifyJobPostingFeedbackModal();

		SGJobPostPage.searchForJob(jobData);
		SGJobPostPage.EditTheJob();

		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,true, jobType)
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.GoToJobListing();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify schedule job functionality", () => {
		cy.log("Scheduling a job");
		const jobType = "Scheduled";
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,false, jobType)
		SGJobPostPage.ClickPostNewJobBtn();
		//SGJobPostPage.VerifySuccessMsg();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		// Edit the Job
		SGJobPostPage.searchForJob(jobData);
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobData,AccountType,true, jobType)
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.searchForJob(jobData)
		SGJobPostPage.RepostJob();
		SGJobPostPage.GoToJobListing();
		//SGJobPostPage.VerifySuccessMsg();
		SGJobPostPage.VerifyJobListingPage();
	});

	// Skiping for now will fix it later
	it.skip("Replace the current posted job ad", () => {

		// SGJobPostPage.GotoPostNewJobForm();
		// SGJobPostPage.FillPostNewJobForm(jobData, AccountType, true);
		// SGJobPostPage.ClickPostNewJobBtn();
		// SGJobPostPage.VerifyJobPostingFeedbackModal();

		SGJobPostPage.GoToJobListing();
		
		
		SGJobPostPage.searchForJob(jobData);

		SGJobPostPage.CopyTheJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyInsufficientSlotErrorMessage();

		SGJobPostPage.FillPostNewJobForm(jobData, AccountType, true);
		SGJobPostPage.SelectReplaceJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		const jobType = 'Active'
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm(jobData, AccountType, false, jobType);
		SGJobPostPage.ClickPostNewJobBtn();
		//SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		
		//Navigate to Job listing
		SGJobPostPage.GoToJobListing();
	
		//Search for the job
		SGJobPostPage.searchForJob(jobData);

		//Copy the job
		SGJobPostPage.CopyTheJob();
		//SGJobPostPage.SelectReplaceJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyDuplicateNotification();
		SGJobPostPage.ClickCancelButton();
	});
});
