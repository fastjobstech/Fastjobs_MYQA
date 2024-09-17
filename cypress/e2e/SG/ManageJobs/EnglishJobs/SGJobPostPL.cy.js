/// <reference types = "Cypress" />

import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("Job posting", () => {
	const AccountType = "parkingLot";

	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.pageVisit(Cypress.env("employerSG"));
		LoginPage.loginEmployer(
			Cypress.env("de_username"),
			Cypress.env("de_password")
		);
		SGJobPostPage.CloseToolTips();
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyPostedJobAd();
	});

	afterEach(() => {
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyPostedJobAd();
	});

	it("Verify able to post and edit the job", () => {
		const jobInfo = {
			jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		};
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();

		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.EditTheJob();

		SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType, true);
		SGJobPostPage.ClickPostNewJobBtn();

		SGJobPostPage.VerifyJobListingPage();
	});

	it("Replace the current posted job ad", () => {
		const jobInfo = {
			jobTitle: "Replace Job (Automated Script Do not Apply!!!)",
		};

		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		SGJobPostPage.CopyTheJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyInsufficientSlotErrorMessage();

		SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType, true);
		SGJobPostPage.SelectReplaceJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.CopyTheJob();
		SGJobPostPage.SelectReplaceJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyDuplicateNotification();
	});
});
