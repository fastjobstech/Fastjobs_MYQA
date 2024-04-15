import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

describe("Job posting", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
		LoginPage.loginEmployer(
			Cypress.env("outlet_username"),
			Cypress.env("outlet_password")
		);
		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifyPostedJobAd();
	});

	it("Verify the Job form elements are visible", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.VerifyOutletElements();
	});

	it("Verify Cancel button redirects back to Active job list", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.ClickCancelButton();
	});

	it("Verify Required error message when Job form is submitted empty", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.VerifyOutletRequiredErrMsg();
	});

	it("Verify able to Post a new job with valid job details", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillOutletPostjobForm("");
		JobPostPage.SelectPackage(2);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifySuccessMsg();
	});

	it("Verify able to Post a Featured job", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillOutletPostjobForm("");
		JobPostPage.SelectPackage(3);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifySuccessMsg();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillOutletPostjobForm("");
		JobPostPage.SelectPackage(2);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifySuccessMsg();

		// Copy the same job
		JobPostPage.CopyTheJob();
		JobPostPage.ClickPostNewJobBtn();

		//Verify the notification
		JobPostPage.VerifyDuplicateNotification();
		JobPostPage.ClickCancelButton();
	});

	// Has issue - FJEMP-3640
	it.only("Verify able to edit the active job", () => {
		const jobInfo = {
			jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		};
		// Post A Job
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillOutletPostjobForm("");
		JobPostPage.SelectPackage(2);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifySuccessMsg();

		// Edit the Job
		JobPostPage.EditTheJob();
		JobPostPage.EditletPostjobForm(jobInfo);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.VerifySuccessMsg();
	});
});
