import LoginPage from "../../../pages/MY/UserPages/LoginPage";

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

	it("Verify able to update the Company information", () => {});
});
