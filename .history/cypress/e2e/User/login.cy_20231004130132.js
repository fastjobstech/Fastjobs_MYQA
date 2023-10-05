import LoginPage from "../../pages/LoginPage";

describe('Login', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err);
        return false;
      });

    beforeEach(() => {
        cy.visit("/")
    })

    it("Successfully login to the Employer page", () => {
        LoginPage.loginEmployer(Cypress.env("login_username"), Cypress.env("login_password"));
        cy.location("pathname").should("equal", "/p/my-activity/dashboard")
    })

    it("Unablle to login with empty form", () => {
        LoginPage.loginEmployer( "", "");
        LoginPage.verifyErrorMessage();
    })
})