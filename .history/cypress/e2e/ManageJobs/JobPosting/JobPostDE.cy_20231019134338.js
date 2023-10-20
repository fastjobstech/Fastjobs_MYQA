import LoginPage from "../../../pages/UserPages/LoginPage"
import JobPostPage from "../../../pages/ManageJobPage/JobPostPage"

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    });

    beforeEach(() => {
        cy.visit("/")
        LoginPage.loginEmployer(Cypress.env('login_username'), Cypress.env('login_password'))
    });

    it("Verify the Job form elements are visible", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.CheckELements()
    })

    it("Verify Cancel button redirects back to Active job list", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.ClickCancelButton()
    })

    it("Verify Required error message when Job form is submitted empty", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.SubmitJobForm()
        JobPostPage.VerifyRequiredErrMsg()
    })

    it.only("Verify able to Post a new job with valid job details", () => {
        const jobInfo = {
            jobTitle: "Automated Job Test! Do not Apply!",
            jobDesc: "Please do not apply, this is a test from automated script!"
        }
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm(jobInfo)
    })
})