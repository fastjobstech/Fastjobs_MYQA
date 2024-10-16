import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";
import ManageApplicant from "../../../../pages/MY/ManageJobPage/ManageApplicants";

describe("Manage Applicants", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.pageVisit("/");
		LoginPage.loginEmployer(Cypress.env("manageApplicantUsername"), Cypress.env("manageApplicantPassword"));
	});

	it.skip("Moves the Jobseeker to each folders (Rejected, KIV, Hire, Shortlisted)", () => {
		JobPostPage.GoToJobListing();
		ManageApplicant.GoToManageApplicant();

		// Shortlisted to Rejected
		ManageApplicant.MoveApplicantToRejected();
		ManageApplicant.verifyMoveSuccessMessage();

		// Rejected to KIV
		ManageApplicant.MoveApplicantToKIV();
		ManageApplicant.verifyMoveSuccessMessage();
		cy.wait(1000);

		// Kiv to Hire
		ManageApplicant.MoveApplicantToHire();
		ManageApplicant.verifyMoveSuccessMessage();
		cy.wait(1000);

		// Hire to Shortlisted
		ManageApplicant.MoveApplicantToShortlisted();
		ManageApplicant.verifyMoveSuccessMessage();
		cy.wait(1000);
	});
});
