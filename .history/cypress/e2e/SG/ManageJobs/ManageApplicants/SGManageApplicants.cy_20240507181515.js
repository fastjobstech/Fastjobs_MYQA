/// <reference types = "Cypress" />

import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("SG | Manage Applicants", () => {
	const AccountType = "directEmployer";

	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit(Cypress.env("employerSG"));
		LoginPage.loginEmployer(
			Cypress.env("SG_DE_Username"),
			Cypress.env("SG_DE_Password")
		);
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyPostedJobAd();
	});

	/** SCENARIOS TO BE COVERED
	 * 1. Post a job then Apply with JS Account
	 * 2. From in progress move the applicant to Short listed
	 * 3. From Shortlisted move the applicant to Rejected
	 * 4. Rejected to KIV
	 * 5. KIV to Hired
	 *
	 * Possible blocker; How long does it take for the Applicant data to be received by employer?
	 */

	it("Post a Job and Jobseeker applied to the Job", () => {
		const JobseekerLogin = {
			username: "kimjay.luta@fastjobs.ph",
			password: "Password123",
			userTwo: "lsdka@gmail.com",
			passTwo: "Password123",
		};

		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		// Login as Jobseeker
		SGJobPostPage.LoginAsJobseeker();
	});
});
