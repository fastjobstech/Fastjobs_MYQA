import LoginPage from "../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../pages/SG/ManageJobsPage/SGJobPostPage";
import UpgradePlan from "../../../pages/SG/UpgradePlanPage/UpgradePlanPage";

describe("Upgrade Plan", () => {
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
		SGJobPostPage.CloseToolTips();
	});

	it("Upgrade plan and Download the invoice without error", () => {
		UpgradePlan.ClickUpgradePlanLink();
		UpgradePlan.SelectPackage();
		UpgradePlan.SubmitBillingInformation();
		UpgradePlan.SubmitPaymentWithValidDetails();
		UpgradePlan.ClickDownloadInvoice();
	});
});
