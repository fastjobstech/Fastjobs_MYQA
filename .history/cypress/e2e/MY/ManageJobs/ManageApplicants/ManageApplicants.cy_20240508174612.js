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

	it.skip("Post a job and apply to the job", () => {
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

	it.skip("Move the applicant from In progress to Shortlisted", () => {
		JobPostPage.GoToJobListing();
		cy.get(".new-jobapp").should("be.visible");
		cy.get(":nth-child(2) > .job-stats-link").click();
	});

	it.skip("Move the applicant from Shortlisted to Rejected", () => {
		JobPostPage.GoToJobListing();
		cy.get(".new-jobapp").should("be.visible");
		cy.get(":nth-child(2) > .job-stats-link").click();

		//Moves from Shortlisted to Rejected
		cy.get(":nth-child(2) > .app-folder-link").click();
		cy.get("#w5 > .btn-candidate-change-folder").click();
		cy
			.get(".iziToast-message")
			.should("contain", "Applicant was moved successfully.");
	});

	it.skip("Move the applicant from Rejected to KIV", () => {
		JobPostPage.GoToJobListing();
		cy.get(".new-jobapp").should("be.visible");
		cy.get(":nth-child(2) > .job-stats-link").click();

		//Moves from Rejected to KIV
		cy.get(":nth-child(5) > .app-folder-link").click();
		cy.get(".job-app-card").should("exist");
		cy.get("#w2 > .btn-candidate-change-folder").click();
		cy
			.get(".iziToast-message")
			.should("contain", "Applicant was moved successfully.");
	});

	it.skip("Move the applicant from KIV to Shortlisted", () => {
		JobPostPage.GoToJobListing();
		cy.get(".new-jobapp").should("be.visible");
		cy.get(":nth-child(2) > .job-stats-link").click();

		//Moves from KIV to Shortlisted
		cy.get(":nth-child(4) > .app-folder-link").click();
		cy.get(".job-app-card").should("exist");
		cy.get("#w3 > .btn-candidate-change-folder").click();
		cy
			.get(".iziToast-message")
			.should("contain", "Applicant was moved successfully.");
	});

	it.skip("Move the applicant from Shortlisted to Hired", () => {
		JobPostPage.GoToJobListing();
		cy.get(".new-jobapp").should("be.visible");
		cy.get(":nth-child(2) > .job-stats-link").click();

		//Moves from Shortlisted to Hired
		cy.get(":nth-child(2) > .app-folder-link").click();
		cy.get(".job-app-card").should("exist");
		cy.get("#w3 > .btn-candidate-change-folder").click();
		cy.get(":nth-child(3) > .app-folder-link").click();
		cy
			.get(".iziToast-message")
			.should("contain", "Applicant was moved successfully.");
		cy.get(".job-app-card").should("exist");
	});
});
