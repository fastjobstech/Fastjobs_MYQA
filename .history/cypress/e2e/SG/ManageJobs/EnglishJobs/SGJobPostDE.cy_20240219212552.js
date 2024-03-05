import LoginPage from "../../../../pages/SG/User/LoginPage"
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage"


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
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.VerifyJobPostFormElements();
    });

    it("Verify Cancel button redirects back to Active job list", () => {
        //
    });

    it("Verify Required error message when Job form is submitted empty", () => {
        //
    });
});