/// <reference types = "Cypress" />
import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("SG Job Posting", () => {
    const AccountType = "recruitmentAgency";

    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('ra_username'), Cypress.env('ra_password'))
    })

    it("Verify the Job form elements are visible", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.VerifyJobFormElements(AccountType)
    })

    it("Verify Cancel button redirects back to Active job list", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickCancelButton()
    })

    //Skip the test for now issue (FJEMP-3581)
    it.skip("Verify Required error message when Job form is submitted empty", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyRequiredErrMsg()
    })

    it("Post new job ad with Agency information included", () => {
        SGJobPostPage.GotoPostNewJobForm()
        
        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        
        SGJobPostPage.RAClickProceedButton()
        SGJobPostPage.ConfirmSubmit()
        
        SGJobPostPage.ExpireTheJob()
    })

    it('Post withouht Agency Info in Job description', () => {
        SGJobPostPage.GotoPostNewJobForm()
        
        SGJobPostPage.RAClickCheckbox()
        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        
        SGJobPostPage.RAClickProceedButton()
        SGJobPostPage.ConfirmSubmit()
        
        SGJobPostPage.ExpireTheJob()
    })

    it("Verify error notification appears when submitted a job that was already posted.", () => {
        SGJobPostPage.GotoPostNewJobForm()

        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        
        SGJobPostPage.RAClickProceedButton()
        SGJobPostPage.ConfirmSubmit()

        //Copy the same job
        cy.wait(5000)
        SGJobPostPage.CopyTheJob()
        SGJobPostPage.ClickPostNewJobBtn()

        //Duplicate Job Error
        SGJobPostPage.VerifyDuplicateNotification()
        SGJobPostPage.ClickCancelButton()
        SGJobPostPage.ExpireTheJob()
    })

    it.only("Verify able to edit the active job", () => {
        const jobInfo = {
            jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)"
        }

        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.RAClickProceedButton()
        SGJobPostPage.ConfirmSubmit()

        //Edit the Job
        SGJobPostPage.EditTheJob()
        SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.RAClickProceedButton()
        SGJobPostPage.ExpireTheJob()
    })

})