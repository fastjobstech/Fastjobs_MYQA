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
        JobPostPage.SendJobPostingFeedback();
    });

    it("Verify the Job form elements are visible", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.CheckELements()
    })

    it("Verify Cancel button redirects back to Active job list", () => {
        JobPostPage.GoToPostNewJobForm();
        JobPostPage.ClickCancelButton();
    })

    it("Verify Required error message when Job form is submitted empty", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifyRequiredErrMsg()
    })

    it("Verify able to Post a new job with valid job details", () => {
        JobPostPage.GoToPostNewJobForm();
        JobPostPage.FillPostNewJobForm("");
        JobPostPage.FillOptionalFields();
        JobPostPage.SelectPackage(2);
        JobPostPage.ClickPostNewJobBtn();
        JobPostPage.ConfirmSubmit();
        JobPostPage.VerifySuccessMsg();
        JobPostPage.ExpireTheJob();
        JobPostPage.SendJobPostingFeedback();
    });

    it("Verify able to Post a feature job with valid job details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(3)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifySuccessMsg()
        JobPostPage.ExpireTheJob()
        JobPostPage.SendJobPostingFeedback();
    })


    it("Verify able to Post a job without filling up the optional details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.SendJobPostingFeedback();
        JobPostPage.VerifySuccessMsg()
        JobPostPage.ExpireTheJob()
    })

    it("Verify error notification appears when submitted a job that was already posted.", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.SendJobPostingFeedback();

        JobPostPage.VerifySuccessMsg()

        // Copy the same job
        JobPostPage.CopyTheJob()
        JobPostPage.ClickPostNewJobBtn()

        //Verify the notification
        JobPostPage.VerifyDuplicateNotification()
        JobPostPage.ClickCancelButton()
        JobPostPage.ExpireTheJob()
    })

    it("Verify able to edit the active job", () => {
        const jobInfo = {
            jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)"
        }
        // Post A Job
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.VerifySuccessMsg()

        JobPostPage.SendJobPostingFeedback();

        // Edit the Job
        JobPostPage.EditTheJob()
        JobPostPage.FillPostNewJobForm(jobInfo)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.VerifySuccessMsg()

        // Expire
        JobPostPage.ExpireTheJob()
    })
})