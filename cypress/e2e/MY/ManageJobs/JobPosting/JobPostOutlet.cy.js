import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

describe("Outlet - Job Posting", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.checkWebsiteAvailability("/");
		cy.pageVisit("/");
		LoginPage.loginEmployer(Cypress.env("outlet_username"), Cypress.env("outlet_password"));

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
		JobPostPage.FillOutletPostjobForm("", false);
		JobPostPage.SelectPackage(2);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();

		JobPostPage.VerifySuccessMsg();
		JobPostPage.VerifyJobPostingFeedbackModal();
		// Edit the Job
		JobPostPage.EditTheJob();

		// JobPostPage.EditletPostjobForm(jobInfo);
		JobPostPage.FillOutletPostjobForm(jobInfo, true);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.VerifySuccessMsg();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillOutletPostjobForm("", false);
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
});
