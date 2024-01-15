const LoginPage = require("../../../pages/MY/UserPages/LoginPage");

describe('SG Login', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err);
        return false;
    });

    beforeEach(() => {
        cy.visit(Cypress.env('employerSG'));
    })
})