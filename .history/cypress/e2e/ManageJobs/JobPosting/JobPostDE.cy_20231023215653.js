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
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifyRequiredErrMsg()
    })

    it("Verify able to Post a new job with valid job details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm()
        JobPostPage.FillOptionalFields()
        JobPostPage.SelectPackage()
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifySuccessMsg()
        JobPostPage.ExpireTheJob()
    })

    it("Verify able to Post a feature job with valid job details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm()
        JobPostPage.SelectPackage(3)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifySuccessMsg()
        cy.get('.tag').contains("Featured").should('be.visible')
        JobPostPage.ExpireTheJob()
    })


    it("Verify able to Post a job without filling up the optional details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm()
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifySuccessMsg()
        JobPostPage.ExpireTheJob()
    })

    it.only("Verify error notification appears when submitted a job that was already posted.", () => {
        JobPostPage.GoToPostNewJobForm()
        // JobPostPage.FillPostNewJobForm()
        // JobPostPage.SelectPackage(2)
        // JobPostPage.ClickPostNewJobBtn()
        // JobPostPage.ConfirmSubmit()
        // JobPostPage.VerifySuccessMsg()

        // Copy the same job
        JobPostPage.CopyTheJob()
        JobPostPage.ClickPostNewJobBtn()

        //Verify the notification
        JobPostPage.VerifyDuplicateNotification()
        JobPostPage.ExpireTheJob()
    })
})