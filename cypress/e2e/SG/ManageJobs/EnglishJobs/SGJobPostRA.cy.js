/// <reference types = "Cypress" />
import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("SG Job Posting DE", () => {
	const AccountType = "recruitmentAgency";

	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		const employerUrlSG = Cypress.env("employerSG");
		cy.checkWebsiteAvailability(employerUrlSG);
		cy.pageVisit(employerUrlSG);
		LoginPage.loginEmployer(Cypress.env("ra_username"), Cypress.env("ra_password"));
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyPostedJobAd();
	});

	afterEach(() => {
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyPostedJobAd();
	});

	it("Post new job ad and Edit with Agency information included", () => {
		const jobInfo = {
			jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		};

		SGJobPostPage.GotoPostNewJobForm();

		SGJobPostPage.FillPostNewJobForm("", AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();

		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Edit the Job
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType, true);

		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.VerifyJobListingPage();
	});

	// Issue reported - FJEMP-3904 NOT FIXED
	it.skip("Verify error notification appears when submitted a job that was already posted.", () => {
		SGJobPostPage.GotoPostNewJobForm();

		SGJobPostPage.FillPostNewJobForm("", AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();

		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Copy the same job
		SGJobPostPage.CopyTheJob();
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.RAClickProceedButton();
		SGJobPostPage.ConfirmSubmit();

		//Duplicate Job Error
		SGJobPostPage.VerifyDuplicateNotification();
		SGJobPostPage.ClickCancelButton();
		SGJobPostPage.VerifyJobListingPage();
	});
});
