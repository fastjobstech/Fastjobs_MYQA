import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("SG Job Posting", () => {
	const AccountType = "outlet";

	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		const employerUrlSG = Cypress.env("employerSG");
		cy.checkWebsiteAvailability(employerUrlSG);
		cy.pageVisit(employerUrlSG);
		LoginPage.loginEmployer(Cypress.env("outlet_username"), Cypress.env("outlet_password"));
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyPostedJobAd();
	});

	afterEach(() => {
		SGJobPostPage.VerifyJobPostingFeedbackModal();
		SGJobPostPage.VerifyPostedJobAd();
	});

	it("Verify able to post and edit a Job with outlets selected", () => {
		const jobInfo = {
			jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		};

		// Post Job Ad
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.ConfirmSubmit();
		SGJobPostPage.VerifyJobListingPage();
		SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Edit the Job
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType, true);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		// Post Job Ad
		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm("", AccountType, false);
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
});
