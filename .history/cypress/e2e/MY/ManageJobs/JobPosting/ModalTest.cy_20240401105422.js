import LoginPage from "../../../../pages/MY/UserPages/LoginPage"
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage"

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit("/");
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'))
        JobPostPage.VerifyJobPostingFeedbackModal()
    })

    it("Post new job", () => {
        JobPostPage.GoToPostNewJobForm()
    })
})