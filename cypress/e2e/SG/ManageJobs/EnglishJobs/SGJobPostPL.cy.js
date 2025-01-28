const Chance = require('chance'); 
const chance = new Chance();
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

let jobData;

describe("Job posting", () => {
	const AccountType = "parkingLot";

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
		cy.employerLogin(Cypress.env("pl_username"), Cypress.env("pl_password"));
		SGJobPostPage.VerifyJobPostingFeedbackModal();
	});

	// afterEach(() => {
	// 	SGJobPostPage.VerifyJobPostingFeedbackModal();
	// 	SGJobPostPage.VerifyPostedJobAd();
	// });

	it("Verify able to post and edit the job", () => {
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm(jobData , AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();
		//SGJobPostPage.ConfirmSubmit();
		

		SGJobPostPage.VerifyJobPostingFeedbackModal();

		SGJobPostPage.searchForJob(jobData);
		SGJobPostPage.EditTheJob();

		SGJobPostPage.FillPostNewJobForm(jobData, AccountType, true);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.GoToJobListing();
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
		//Navigate to Job listing
		SGJobPostPage.GoToJobListing();
	
		//Search for the job
		SGJobPostPage.searchForJob(jobData);

		//Copy the job
		SGJobPostPage.CopyTheJob();
		//SGJobPostPage.SelectReplaceJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyDuplicateNotification();
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
