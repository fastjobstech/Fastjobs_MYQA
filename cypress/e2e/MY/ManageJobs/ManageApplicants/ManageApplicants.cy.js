import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";
import ManageApplicant from "../../../../pages/MY/ManageJobPage/ManageApplicants";

describe("Manage Applicants", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.viewport("macbook-15");
		cy.visit("/");
		LoginPage.loginEmployer(
			Cypress.env("de_username"),
			Cypress.env("de_password")
		);
	});

	after(() => {
		JobPostPage.VerifyPostedJobAd();
	});

	it.skip("Post a Job and Jobseeker applied to the Job", () => {
		const JobseekerLogin = {
			username: "kimjay.luta@fastjobs.ph",
			password: "Password123",
			userTwo: "lsdka@gmail.com",
			passTwo: "Password123",
		};
		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifyPostedJobAd();

		// JobPostPage.GoToJobListing();
		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm("", false);
		JobPostPage.SelectPackage(3);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifyJobPostingFeedbackModal();

		ManageApplicant.LoginAsJobseeker(JobseekerLogin);
		ManageApplicant.ApplyJob();
	});

	it.skip("Move Jobseeker from New to Shortlisted", () => {
		JobPostPage.GoToJobListing();
		ManageApplicant.GoToManageApplicant();
		// cy.get(":nth-child(2) > .app-folder-link").should("be.visible").click();
		cy.wait(500);
		ManageApplicant.checkApplicantDataIsReceived();
		ManageApplicant.MoveApplicantToShortlisted();
		ManageApplicant.verifyMoveSuccessMessage();
	});

	it.skip("Move Jobseeker from Shortlisted to Rejected", () => {
		JobPostPage.GoToJobListing();
		ManageApplicant.GoToManageApplicant();
		ManageApplicant.MoveApplicantToRejected();
		ManageApplicant.verifyMoveSuccessMessage();
	});

	it.skip("Move Jobseeker from Rejected to KIV", () => {
		JobPostPage.GoToJobListing();
		ManageApplicant.GoToManageApplicant();
		ManageApplicant.MoveApplicantToKIV();
		ManageApplicant.verifyMoveSuccessMessage();
	});

	it.skip("Move Jobseeker from KIV to Hire", () => {
		JobPostPage.GoToJobListing();
		ManageApplicant.GoToManageApplicant();
		ManageApplicant.MoveApplicantToHire();
		ManageApplicant.verifyMoveSuccessMessage();
	});
});
