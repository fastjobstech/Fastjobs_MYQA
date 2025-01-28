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

	before(() => {
        // Generate random data and assign it to jobData
        jobData = {
            jobTitle: chance.profession(),
            jobDesc: chance.sentence({ words: 12 }) + " " + 'Updated',
            applyByEmail: chance.email(),
            applyByCallSms: '85556278',
            editedJobTitle: chance.profession() + " " + 'Updated',
        };
    });

	beforeEach(() => {
		const employerUrlSG = Cypress.env("employerSG");
		cy.checkWebsiteAvailability(employerUrlSG);
		cy.pageVisit(employerUrlSG);
		cy.employerLogin(Cypress.env("ra_username"), Cypress.env("ra_password"));
		SGJobPostPage.VerifyJobPostingFeedbackModal();
	});

	// afterEach(() => {
	// 	SGJobPostPage.VerifyJobPostingFeedbackModal();
	// 	SGJobPostPage.VerifyPostedJobAd();
	// });

	it("Post new job ad and Edit with Agency information included", () => {

		SGJobPostPage.GotoPostNewJobForm();

		SGJobPostPage.FillPostNewJobForm(jobData , AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();

		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Edit the Job
		SGJobPostPage.searchForJob(jobData);
		
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobData, AccountType, true);

		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.VerifyJobListingPage();
	});

	// Issue reported - FJEMP-3904 NOT FIXED
	it.skip("Verify error notification appears when submitted a job that was already posted.", () => {
		SGJobPostPage.GoToJobListing();
		
		//search for the job
		SGJobPostPage.searchForJob(jobData);

		//Copy the same job
		SGJobPostPage.CopyTheJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();

		//Duplicate Job Error
		SGJobPostPage.VerifyDuplicateNotification();
		SGJobPostPage.ClickCancelButton();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Expire the Job Post.",() =>{
			//Navigate to Job listing
			SGJobPostPage.GoToJobListing();
	
			//Search for the job
			SGJobPostPage.searchForJob(jobData);
	
			//Expire the same job
			SGJobPostPage.expireJobPost()
			//SGJobPostPage.VerifySuccessMsg();	
			SGJobPostPage.searchForJob(jobData);
			SGJobPostPage.verifyExpiredJobNotShownInList();
	})
});


