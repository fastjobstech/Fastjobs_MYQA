import LoginPage from "../../../../pages/MY/UserPages/LoginPage";
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage";

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit("/")
        LoginPage.loginEmployer(Cypress.env('pl_username'), Cypress.env('pl_password'))
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifyPostedJobAd()
    })

    it("Verify the Job form elements are visible", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.VerifyJobFormElements()
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
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.FillOptionalFields()
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifySuccessMsg()
    })

    it("Verify able to Post a feature job with valid job details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifySuccessMsg()
    })

    it("Verify able to Post a job without filling up the optional details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifySuccessMsg()
    })

    it("Verify error notification appears when submitted a job that was already posted.", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifyJobPostingFeedbackModal()

        // Copy the same job
        cy.wait(6000)
        JobPostPage.CopyTheJob()
        JobPostPage.ClickPostNewJobBtn()

        //Verify the notification
        JobPostPage.VerifyDuplicateNotification()
        JobPostPage.ClickCancelButton()
    })

    it("Verify able to edit the active job", () => {
        const jobInfo = {
            jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)"
        }
        // Post A Job
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.ClickPostNewJobBtn()

        JobPostPage.VerifySuccessMsg()
        JobPostPage.VerifyJobPostingFeedbackModal()

        // Edit the Job
        JobPostPage.EditTheJob()
        JobPostPage.FillPostNewJobForm(jobInfo)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifySuccessMsg()

        // Expire
        JobPostPage.ExpireTheJob()
    })
})