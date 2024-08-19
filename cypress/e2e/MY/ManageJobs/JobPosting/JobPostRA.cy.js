import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

describe("Recruitment Agency - Job Posting", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
		LoginPage.loginEmployer(
			Cypress.env("ra_username"),
			Cypress.env("ra_password")
		);

		// Tour - close the tour
		cy.get("#tg-dialog-close-btn").should("be.visible");
		cy.get("#tg-dialog-close-btn").click();

		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifyPostedJobAd();
	});

	it("Verify able to Post Job ad and edit the job", () => {
		const jobInfo = {
			jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		};
		// Post A Job
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm("", false);
		JobPostPage.SelectPackage(2);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifySuccessMsg();
		JobPostPage.VerifyJobPostingFeedbackModal();

		// Edit the Job
		JobPostPage.EditTheJob();
		JobPostPage.FillPostNewJobForm(jobInfo, true);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.VerifySuccessMsg();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm("", false);
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
});
