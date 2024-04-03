import LoginPage from "../../../../pages/MY/UserPages/LoginPage"
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage"

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit("/");
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'));
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifyPostedJobAd()
    });

    it('Verify the Job form elements are visible', () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.VerifyJobFormElements()
    })

    it('Verify Cancel button redirects back to Active job list', () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.ClickCancelButton()
    })

    it('Verify Required error message when Job form is submitted empty', () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifyRequiredErrMsg()
    })

    it('Verify able to Post a new job with valid job details', () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifySuccessMsg()
    })

    it("Verify able to Post a feature job with valid job details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(3)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifySuccessMsg()
    })

    // Updating job Issue FJEMP-3640
    it("Verify error notification appears when submitted a job that was already posted.", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        
        JobPostPage.VerifyJobPostingFeedbackModal()
        JobPostPage.VerifySuccessMsg()

        // Copy the same job
        JobPostPage.CopyTheJob()
        JobPostPage.ClickPostNewJobBtn()

        //Verify the notification
        JobPostPage.VerifyDuplicateNotification()
        JobPostPage.ClickCancelButton()
    })

    // Updating job Issue FJEMP-3640
    it.skip("Verify able to edit the active job", () => {
        const jobInfo = {
            jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)"
        }
        // Post A Job
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifyJobPostingFeedbackModal()

        JobPostPage.VerifySuccessMsg()
        // Edit the Job
        JobPostPage.EditTheJob()
        JobPostPage.FillPostNewJobForm(jobInfo)
        JobPostPage.ClickPostNewJobBtn()

        // Expire
        JobPostPage.VerifySuccessMsg()
    })
})