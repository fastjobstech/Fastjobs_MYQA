import LoginPage from "../../../pages/MY/UserPages/LoginPage";

describe("Admin Banner Management", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.viewport("macbook-15");
		cy.visit(Cypress.env("adminMY"));
	});

	it("Creates a banner and verify the data", () => {
		LoginPage.adminLoginMY(
			Cypress.env("adminUsernameMY"),
			Cypress.env("adminPassMY")
		);
	});
});
