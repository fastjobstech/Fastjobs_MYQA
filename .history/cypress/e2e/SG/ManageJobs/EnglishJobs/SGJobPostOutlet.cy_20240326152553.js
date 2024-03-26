import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";


describe("SG Job Posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env('employerSG'));
        LoginPage.loginEmployer(Cypress.env('outlet_username'), Cypress.env('outlet_password'));
    })

    it("Verify the Job form elements are visible", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.VerifyJobFormElements('outlet')
    })

    it.only("Verify Cancel button redirects back to Active job list", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickCancelButton()
    })
    //Verify cancel button
    //Verify Required messagges
})