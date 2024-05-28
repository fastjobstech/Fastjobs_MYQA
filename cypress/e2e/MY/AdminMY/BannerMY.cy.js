import LoginPage from "../../../pages/MY/UserPages/LoginPage";
import BannerPage from "../../../pages/MY/AdminMY/BannerMYPage";

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

	it("Verify able to create the Banner", () => {
		const bannerData = {
			descrition:
				"Find Your Dream Job Today! 🚀 Explore top opportunities in your field. Apply now and take the next step in your career!",
			buttonText: "Apply Now!",
			title: "Exciting Career Opportunities!",
			coyID: 20320,
		};

		const actionDelete = 1;
		//Navigate to the Banner form
		BannerPage.navigateToBannerListing();
		BannerPage.navigateToCreateBanner();

		// Verify the form
		BannerPage.verifyBannerFormElement();

		// Fill the form
		BannerPage.fillBannerForm(bannerData, false);
		BannerPage.verifyAlertDisplayed("alert-success");

		// Remove the added Banner
		BannerPage.actionBanner(actionDelete, bannerData.title);
		BannerPage.verifyAlertDisplayed("alert-success");
	});

	it("Verify able to update the Banner", () => {
		const bannerData = {
			descrition:
				"Find Your Dream Job Today! 🚀 Explore top opportunities in your field. Apply now and take the next step in your career!",
			buttonText: "Apply Now!",
			title: "Exciting Career Opportunities!",
			coyID: 20320,
		};

		const newBannerData = {
			descrition: "(Update) Find Your Dream Job Today!",
			buttonText: "(Update) Apply Now!",
			title: "(Update) Exciting Career Opportunities!",
			coyID: 20320,
		};

		//Navigate to the Banner form
		BannerPage.navigateToBannerListing();
		BannerPage.navigateToCreateBanner();

		// Verify the form
		BannerPage.verifyBannerFormElement();

		// Fill the form
		BannerPage.fillBannerForm(bannerData, false);
		BannerPage.verifyAlertDisplayed("alert-success");

		//Update Banner data
		BannerPage.actionBanner(0, bannerData.title);
		BannerPage.fillBannerForm(newBannerData, true);
		BannerPage.verifyAlertDisplayed("alert-success");

		//Delete the Banner
		BannerPage.actionBanner(1, newBannerData.title);
		BannerPage.verifyAlertDisplayed("alert-success");
	});
});
