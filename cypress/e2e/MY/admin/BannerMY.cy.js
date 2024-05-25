import LoginPage from "../../../pages/MY/UserPages/LoginPage";
import BannerPage from "../../../pages/MY/admin/BannerMY";

describe("Admin Banner Management", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.viewport("macbook-11");
		cy.visit(Cypress.env("adminMY"));
		LoginPage.adminLoginMY(
			Cypress.env("adminUsernameMY"),
			Cypress.env("adminPassMY")
		);
	});

	it("Creates a banner and verify the data", () => {
		BannerPage.navigateToBannerListing();
		BannerPage.navigateToCreateBanner();

		//Verify the form
		BannerPage.verifyBannerFormElement();

		// Fill the form
		BannerPage.fillBannerForm();
		BannerPage.verifyAlertDisplayed("alert-success");

		// save the changes

		// verify the changes was added
	});
});
