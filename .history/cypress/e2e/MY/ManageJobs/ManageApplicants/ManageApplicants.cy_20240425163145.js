import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

describe("Manage Applicants", () => {
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
		// JobPostPage.VerifyJobPostingFeedbackModal();
		// JobPostPage.VerifyPostedJobAd();
	});

	it("Post a job and apply to the job", () => {
		JobPostPage.GoToJobListing();
		// JobPostPage.GoToPostNewJobForm();
		// JobPostPage.FillPostNewJobForm("");
		// JobPostPage.SelectPackage(3);
		// JobPostPage.ClickPostNewJobBtn();
		// JobPostPage.ConfirmSubmit();
		// JobPostPage.VerifyJobPostingFeedbackModal();
		cy.origin(
			"//www-test.fastjobs.my/malaysia-jobs/AUTOMATED+JOB+POST+DO+NOT+APPLY-jobs-search",
			() => {
				cy.get("#btnApplyNow").click();
			}
		);
	});
});
