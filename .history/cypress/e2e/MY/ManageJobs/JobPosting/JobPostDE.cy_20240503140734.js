import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

describe("Direct Employer - Job Posting", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
		LoginPage.loginEmployer(
			Cypress.env("de_username"),
			Cypress.env("de_password")
		);
		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifyPostedJobAd();
	});

	it("Verify able to Post a job with valid job details", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm("");
		JobPostPage.SelectPackage(3);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifySuccessMsg();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm("");
		JobPostPage.SelectPackage(2);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();

		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifySuccessMsg();

		// Copy the same job
		JobPostPage.CopyTheJob();
		JobPostPage.ClickPostNewJobBtn();

		//Verify the notification
		JobPostPage.VerifyDuplicateNotification();
		JobPostPage.ClickCancelButton();
	});

	it.only("Verify able to edit the active job", () => {
		const jobInfo = {
			jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		};
		// Post A Job
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm("");
		JobPostPage.SelectPackage(2);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifyJobPostingFeedbackModal();

		JobPostPage.VerifySuccessMsg();
		// Edit the Job
		JobPostPage.EditTheJob();
		JobPostPage.FillPostNewJobForm(jobInfo);
		JobPostPage.ClickPostNewJobBtn();

		// Expire
		JobPostPage.VerifySuccessMsg();
	});
});
