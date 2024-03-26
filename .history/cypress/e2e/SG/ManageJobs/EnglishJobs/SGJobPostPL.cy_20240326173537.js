import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";


// Test cases
/**
 * 1. 
 * 2. 
 * 3. 
 * 4. 
 * 5. 
 * 6. Replace the current job posted
 * 7. Verify able to edit the posted job ad
 */

describe("Job posting", () => {
    const AccountType = 'parkingLot'

    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'))
    })

    it('Verify the Job form elements are visible', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.VerifyJobFormElements(AccountType)
    })

    it('Verify Cancel button redirects back to Active job list', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickCancelButton()
    })

    it('Verify Required error message when Job form is submitted empty', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyRequiredErrMsg(AccountType)
    })

    it('Verify able to Post a new job with valid job details', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm("", AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.ExpireTheJob()
    })

    it('Post a job without available slot', () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm("", AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.CopyTheJob()
        SGJobPostPage.ClickPostNewJobBtn()
        SGJobPostPage.VerifyInsufficientSlotErrorMessage()
        SGJobPostPage.GoToJobListing()
        SGJobPostPage.ExpireTheJob()
    })

    it.only('Replace the current posted job ad', () => {
        const jobInfo = {
            jobTitle: "Replace Job (Automated Script Do not Apply!!!)"
        }

        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm("", AccountType)
        SGJobPostPage.ClickPostNewJobBtn()
        
        SGJobPostPage.CopyTheJob()
        SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType)

        SGJobPostPage.SelectReplaceJob()
        SGJobPostPage.ClickPostNewJobBtn()

        // SGJobPostPage.GoToJobListing()
        // SGJobPostPage.ExpireTheJob()
    })

    // it("Verify able to edit the active job", () => {
    //     const jobInfo = {
    //         jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)"
    //     }

    //     SGJobPostPage.GotoPostNewJobForm();
    //     SGJobPostPage.FillPostNewJobForm("");
    //     SGJobPostPage.ClickPostNewJobBtn();

    //     //Edit the Job
    //     cy.wait(5000);
    //     SGJobPostPage.EditTheJob();
    //     SGJobPostPage.FillPostNewJobForm(jobInfo);
    //     SGJobPostPage.ClickPostNewJobBtn();
    //     SGJobPostPage.ExpireTheJob();
    // });

})