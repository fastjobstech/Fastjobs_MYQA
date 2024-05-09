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
		JobPostPage.VerifyJobPostingFeedbackModal();
		JobPostPage.VerifyPostedJobAd();
	});

	it("Post a Job and Jobseeker applied to the Job", () => {
		const JobseekerLogin = {
			username: "kimjay.luta@fastjobs.ph",
			password: "Password123",
			userTwo: "lsdka@gmail.com",
			passTwo: "Password123",
		};

		JobPostPage.GoToJobListing();

		JobPostPage.GoToPostNewJobForm();
		JobPostPage.FillPostNewJobForm("");
		JobPostPage.SelectPackage(3);
		JobPostPage.ClickPostNewJobBtn();
		JobPostPage.ConfirmSubmit();
		JobPostPage.VerifyJobPostingFeedbackModal();
	});
});
