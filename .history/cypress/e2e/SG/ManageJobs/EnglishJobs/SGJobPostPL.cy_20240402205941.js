import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("Job posting", () => {
    const AccountType = 'parkingLot';

    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'))
        SGJobPostPage.VerifyJobPostingFeedbackModal()
        SGJobPostPage.VerifyPostedJobAd()
    })

    it('Verify the Job form elements are visible', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.VerifyJobFormElements(AccountType)
    })

    it('Verify Cancel button redirects back to Active job list', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickCancelButton()
        SGJobPostPage.VerifyJobListingPage()
    })

    it('Verify Required error message when Job form is submitted empty', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyRequiredErrMsg(AccountType)
    })

    it('Verify able to Post a new job with valid job details', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyJobListingPage()
        SGJobPostPage.VerifyJobPostingFeedbackModal()
    })

    it('Post a job without available slot', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyJobPostingFeedbackModal()
        SGJobPostPage.CopyTheJob()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyInsufficientSlotErrorMessage()
    })

    it('Replace the current posted job ad', () => {
        const jobInfo = {
            jobTitle: "Replace Job (Automated Script Do not Apply!!!)"
        }
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyJobPostingFeedbackModal()
        SGJobPostPage.CopyTheJob()
        SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType, true)
        SGJobPostPage.SelectReplaceJob()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyJobListingPage()
    })

    it("Verify error notification appears when submitted a job that was already posted.", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm('', AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyJobPostingFeedbackModal()
        SGJobPostPage.CopyTheJob()
        cy.wait(5000)
        SGJobPostPage.SelectReplaceJob()
        SGJobPostPage.ClickPostNewJobBtn()
        cy.wait(5000)
        SGJobPostPage.VerifyDuplicateNotification()
    })

    it("Verify able to edit the active job", () => {
        const jobInfo = {
            jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)"
        }
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.FillPostNewJobForm("", AccountType)
        SGJobPostPage.ClickPostNewJobBtn()

        SGJobPostPage.VerifyJobPostingFeedbackModal()
        SGJobPostPage.VerifyJobListingPage()
        SGJobPostPage.EditTheJob()

        SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType)
        SGJobPostPage.ClickPostNewJobBtn()

        SGJobPostPage.VerifyJobListingPage()

    })
})