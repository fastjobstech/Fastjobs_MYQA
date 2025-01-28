const Chance = require('chance'); 
const chance = new Chance();
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

export let jobTitle, jobDesc, applyByEmail, applyByCallSms, editedJobTitle;

describe("Parking lot - Job Posting", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	before(() => {
        // Generate random data and assign it to global variables
        jobTitle = chance.profession();
        jobDesc = chance.sentence({ words: 12 });
        applyByEmail = chance.email();
        applyByCallSms = '911911978';
        editedJobTitle = jobTitle+" "+"Updated";
    });

	beforeEach(() => {
		cy.viewport("macbook-15");
		cy.checkWebsiteAvailability("/");
		cy.pageVisit("/");
		cy.employerLogin(Cypress.env("pl_username"), Cypress.env("pl_password"))
		JobPostPage.VerifyJobPostingFeedbackModal();
		//JobPostPage.VerifyPostedJobAd();
	});

	// afterEach(() => {
	// 	JobPostPage.VerifyJobPostingFeedbackModal();
	// 	JobPostPage.VerifyPostedJobAd();
	// });

	it("Verify able to Post Job ad and edit the job", () => {
		
		// Post A Job
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm(false, jobTitle, jobDesc, applyByEmail, applyByCallSms);
		JobPostPage.ClickPostNewJobBtn();

		//JobPostPage.VerifySuccessMsg();
		JobPostPage.VerifyJobPostingFeedbackModal();

		// Edit the Job
		JobPostPage.GoToJobListing();
		
		JobPostPage.searchForJob(jobTitle);
		JobPostPage.EditTheJob();
		JobPostPage.FillPostNewJobForm(true, jobTitle, jobDesc, applyByEmail, applyByCallSms);
		JobPostPage.ClickPostNewJobBtn();
		//JobPostPage.VerifySuccessMsg();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		
		JobPostPage.GoToJobListing();
		
		JobPostPage.searchForJob(jobTitle);
		JobPostPage.CopyTheJob();
		JobPostPage.ClickPostNewJobBtn();

		//Verify the notification
		JobPostPage.VerifyDuplicateNotification();
		JobPostPage.ClickCancelButton();
	});

	it("Expire the Job Post.",() =>{
		//Navigate to Job listing
		JobPostPage.GoToJobListing();
		
		//Search for the job
		JobPostPage.searchForJob(jobTitle);
		
		//Expire the same job
		JobPostPage.ExpireTheJobPost()
		//SGJobPostPage.VerifySuccessMsg();	
		JobPostPage.searchForJob(jobTitle);
		JobPostPage.verifyExpiredJobNotShownInList();
	})
});
