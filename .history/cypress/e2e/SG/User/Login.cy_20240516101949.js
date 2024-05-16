import LoginPage from "../../../../pages/SG/User/LoginPage";

describe("SG Login", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit(Cypress.env("employerSG"));
	});

	it("Visit employer SG", () => {});
});
