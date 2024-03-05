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
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.ClickCancelButton();
    });

    it("Verify Required error message when Job form is submitted empty", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.ClickPostNewJobBtn();
        SGJobPostPage.VerifyRequiredErrMsg();
    });
    /////
    it.only("Verify able to Post a new job with valid job details", () => {
        SGJobPostPage.GotoPostNewJobForm();
    });

    it("Verify able to Post a feature job with valid job details", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(3)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
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
        JobPostPage.ExpireTheJob()
    })

    it("Verify error notification appears when submitted a job that was already posted.", () => {
        JobPostPage.GoToPostNewJobForm()
        JobPostPage.FillPostNewJobForm("")
        JobPostPage.SelectPackage(2)
        JobPostPage.ClickPostNewJobBtn()
        JobPostPage.ConfirmSubmit()
        JobPostPage.SendJobPostingFeedback();

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

        JobPostPage.SendJobPostingFeedback();

        // Edit the Job
        JobPostPage.EditTheJob()
        JobPostPage.FillPostNewJobForm(jobInfo)
        JobPostPage.ClickPostNewJobBtn()

        // Expire
        JobPostPage.ExpireTheJob()
    })
});