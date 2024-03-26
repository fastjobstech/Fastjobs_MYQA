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

    it("Verify Cancel button redirects back to Active job list", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickCancelButton()
    })

    it("Verify Required error messagges are displayed", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyRequiredErrMsg('outlet')
    })

    it.only("Verify able to Post a new job with valid job details", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', 'outlet')
        // SGJobPostPage.ClickPostNewJobBtn()
        // SGJobPostPage.ExpireTheJob()
    })
    //Verify able to post a Job with outlets selected
    //Verify able to post a Job without outlets selected
    //Verify error notification appears when submitted a job that was already posted.
    //Verify able to edit the posted job
})