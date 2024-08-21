import LoginPage from "../../../pages/SG/User/LoginPage";

describe("SG Job Posting", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit(Cypress.env("adminSG"));
		LoginPage.adminLoginSG(
			Cypress.env("adminUserSG"),
			Cypress.env("adminPassSG")
		);
	});

	it("Verify able to Create, Update and Delete Banner", () => {
		const bannerData = {
			descrition:
				"Find Your Dream Job Today! 🚀 Explore top opportunities in your field. Apply now and take the next step in your career!",
			buttonText: "Apply Now!",
			title: "Exciting Career Opportunities!",
			url: "AutomatedBanner",
		};

		const fileName = "cypress/fixtures/banner.jpeg";

		// Navigate to Banner listing
		cy.visit("https://admin-qa.fastjobs.sg/p/banner/index");

		// Creates the banner
		// Navigate to create banner
		cy.get(".btn-success").contains("Create Banner").click();

		// Verify elements
		cy.url().should("contain", "/create");
		cy.get(".banner-form").should("be.visible");

		// Fills out the form
		cy.get("#platform > :nth-child(2)").click();
		cy.get("#title").type(bannerData.title);

		cy.get("#tmpbanner").should("exist");
		cy.get("#tmpbanner").selectFile(fileName, { force: true });

		cy.get("#postedfrom").should("be.visible").type("2024-08-31");

		cy.get("#postedto").should("be.visible").type("2024-12-31");

		cy.get("#postedfrom").click();
		cy.get("#urltitle").type(bannerData.url);
		cy.get("#url").type(bannerData.url);

		// cy
		// 	.get("#processing-btn")
		// 	.contains("CREATE BANNER")
		// 	.should("be.visible")
		// 	.click();

		// Verify the banner is created successfully
		// cy
		// 	.get("#alertdiv")
		// 	.should("be.visible")
		// 	.and("contain", "Banner has been created.");

		// Locate and update the banner
		// verify the banner is updated succesfully

		// Locate and deletes the banner
		// verify the banner is deleted successfully
	});
});
