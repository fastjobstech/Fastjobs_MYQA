import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

describe("Parking lot - Job Posting", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.viewport("macbook-15");
		cy.pageVisit("/");
		LoginPage.loginEmployer(Cypress.env("pl_username"), Cypress.env("pl_password"));

		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifyPostedJobAd();
	});

	afterEach(() => {
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
		JobPostPage.ClickPostNewJobBtn();

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
		JobPostPage.ClickPostNewJobBtn();

		JobPostPage.VerifySuccessMsg();
		JobPostPage.VerifyJobPostingFeedbackModal();
		// Copy the same job
		JobPostPage.CopyTheJob();
		JobPostPage.ClickPostNewJobBtn();

		//Verify the notification
		JobPostPage.VerifyDuplicateNotification();
		JobPostPage.ClickCancelButton();
	});
});
