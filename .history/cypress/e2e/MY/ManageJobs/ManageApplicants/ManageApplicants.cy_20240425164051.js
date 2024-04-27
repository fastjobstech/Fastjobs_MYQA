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
	/**
	 * Possible solution
	 * 1. Handle new tab with invoke
	 * 2. Run another test case for accessing the Jobseeker
	 */
	it("Post a job and apply to the job", () => {
		JobPostPage.GoToJobListing();
		// JobPostPage.GoToPostNewJobForm();
		// JobPostPage.FillPostNewJobForm("");
		// JobPostPage.SelectPackage(3);
		// JobPostPage.ClickPostNewJobBtn();
		// JobPostPage.ConfirmSubmit();
		// JobPostPage.VerifyJobPostingFeedbackModal();
		cy.get("[data-action='visit-post']").invoke("removeAttr", "target").click();
		cy.get("#btnApplyNow").click();
		cy.get("[name='IDToken1']").should("be.visible");
		cy.get("#password").should("be.visible");
		cy.contains("Login").should("be.visible");
	});
});
