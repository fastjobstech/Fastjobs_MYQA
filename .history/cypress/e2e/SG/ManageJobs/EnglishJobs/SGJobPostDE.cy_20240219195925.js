describe("SG Job Posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    });

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"));
        LoginPage.loginEmployer(Cypress.env('SG_DE_Username'), Cypress.env('SG_DE_Password'));
    });

    it("Verify the Job form elements are visible", () => {
        //Scripts
    });
});