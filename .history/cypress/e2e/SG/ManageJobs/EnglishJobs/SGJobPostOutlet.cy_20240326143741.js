import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";


describe("SG Job Posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"));
        LoginPage.loginEmployer(Cypress.env('outlet_username'), Cypress.env('outlet_password'));
    })

    it.only("Verify the Job form elements are visible", () => {
        SGJobPostPage.GotoPostNewJobForm()
        cy.get('.outlet-selection-panel').should('be.visible')
        // SGJobPostPage.VerifyJobFormElements('outlet')
        // SGJobPostPage.VerifyJobPostFormElements();
        // Verify outlets are displayed
        // SGJobPostPage.VerifyOutletSection();
    })
})