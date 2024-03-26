import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";


// Test cases
/**
 * 1. 
 * 2. 
 * 3. 
 * 4. 
 * 5. Post a job without available slot
 * 6. Change posted job with new job ad when there's no more available slot
 * 6. Verify duplicate error message appear when submitted duplicated job
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

    it.only('Post a job without available slot', () => {
        const jobInfo = {
            jobTitle: "Parking Lot New Job Title (Automated Script Do not Apply!!!)"
        }
        // Post a job
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.FillPostNewJobForm("", AccountType)
        SGJobPostPage.ClickPostNewJobBtn()

        // Copy the job - edit the title - error message appear - verify the err message
        SGJobPostPage.CopyTheJob();
        // SGJobPostPage.FillPostNewJobForm(jobInfo, AccountType)
        SGJobPostPage.ClickPostNewJobBtn()

        // Verify error message
        SGJobPostPage.VerifyInsufficientSlotErrorMessage()

        // expire all the job
        SGJobPostPage.ExpireTheJob()
    })

    // it("Verify error notification appears when submitted a job that was already posted.", () => {
    //     SGJobPostPage.GotoPostNewJobForm();
    //     SGJobPostPage.FillPostNewJobForm("");
    //     SGJobPostPage.ClickPostNewJobBtn();

    //     //Copy the same job
    //     SGJobPostPage.CopyTheJob();
    //     SGJobPostPage.ClickPostNewJobBtn();

    //     //Duplicate Job Error
    //     SGJobPostPage.VerifyDuplicateNotification();
    //     SGJobPostPage.ClickCancelButton();
    //     SGJobPostPage.ExpireTheJob();
    // });

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