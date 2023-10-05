import LoginPage from "../../pages/LoginPage";

describe('Login', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err);
        return false;
      });

    beforeEach(() => {
        cy.visit("/login")
    })
})