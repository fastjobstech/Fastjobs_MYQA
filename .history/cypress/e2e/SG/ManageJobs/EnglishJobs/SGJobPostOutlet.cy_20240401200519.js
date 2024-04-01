import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";


describe("SG Job Posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env('employerSG'))
        // LoginPage.loginEmployer(Cypress.env('outlet_username'), Cypress.env('outlet_password'))
        LoginPage.loginEmployer('b.enny.bustam@fastjobs.sg', 'Password123')
        SGJobPostPage.VerifyJobPostingFeedbackModal()
        SGJobPostPage.VerifyPostedJobAd()
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

    // Got issue at the moment FJEMP-3594
    it.only("Verify able to post a Job with outlets selected", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', 'outlet')
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.ConfirmSubmit()
    })

    it.skip("Verify error notification appears when submitted a job that was already posted.", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', 'outlet')
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.ConfirmSubmit()

        //Copy the same job
        SGJobPostPage.CopyTheJob()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.ConfirmSubmit()

        //Duplicate Job Error
        SGJobPostPage.VerifyDuplicateNotification()
        SGJobPostPage.ClickCancelButton()
        SGJobPostPage.ExpireTheJob()
    })

    it.skip("Verify able to edit the active job", () => {
        const jobInfo = {
            jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)"
        }

        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', 'outlet')
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.ConfirmSubmit()

        //Edit the Job
        cy.wait(5000)
        SGJobPostPage.EditTheJob()
        SGJobPostPage.FillPostNewJobForm(jobInfo, 'outlet')
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.ConfirmSubmit()
        SGJobPostPage.ExpireTheJob()
    })
})