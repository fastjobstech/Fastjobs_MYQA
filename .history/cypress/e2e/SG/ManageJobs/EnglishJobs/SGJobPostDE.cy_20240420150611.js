/// <reference types = "Cypress" />

import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("SG Job Posting", () => {
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

	it("Verify able to Post a new job with valid job details", () => {
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.VerifyJobPostingFeedbackModal();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Copy the same job
		SGJobPostPage.CopyTheJob();
		SGJobPostPage.ClickPostNewJobBtn();

		//Duplicate Job Error
		SGJobPostPage.VerifyDuplicateNotification();
		SGJobPostPage.ClickCancelButton();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify able to edit the active job", () => {
		const jobInfo = {
			jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		};

		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Edit the Job
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyJobListingPage();
	});
});