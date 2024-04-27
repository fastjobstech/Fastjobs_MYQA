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
		const JobseekerLogin = {
			username: "kimjay.luta@fastjobs.ph",
			password: "Password123",
			userTwo: "lsdka@gmail.com",
			passTwo: "Password123",
		};
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

		cy.get("[name='IDToken1']").type(JobseekerLogin.userTwo);
		cy.get("#password").type(JobseekerLogin.passTwo);
		cy.get(".form-group > .btn").click();
		cy.get(".col-sm-12 > #btnApplyNow").click();
		cy.get(":nth-child(1) > .mode-app-label > .radio-btn-apply").click();
		cy.get(".container-apply-btn > .btn").click();
		cy
			.get(".apply-method-desc")
			.should(
				"contain",
				"Fast Apply(Application has been successfully sent to the employer)"
			);
	});

	it.only("Move the applicant to Shortlisted", () => {
		JobPostPage.GoToJobListing();
		cy.get(".new-jobapp").should("be.visible");
		cy.get(":nth-child(2) > .job-stats-link").click();
		cy.get("#w3 > .btn-candidate-change-folder").click();
		cy.get(":nth-child(2) > .app-folder-link").click();
		cy.get(".job-app-card").should("exist");
	});
});
