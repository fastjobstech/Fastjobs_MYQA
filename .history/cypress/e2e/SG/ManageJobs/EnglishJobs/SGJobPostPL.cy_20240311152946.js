import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'));
    });

    it("Verify the Job form elements are visible", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.VerifyJobPostFormElements();
    });

    it("Verify Cancel button redirects back to Active job list", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.ClickCancelButton();
    });

})