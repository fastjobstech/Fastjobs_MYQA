import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";


// Test cases
/**
 * 1. Verify the Job form elements are displayed
 * 2. Verify able to cancel job posting
 * 3. Verify Error required messages are displayed
 * 4. Verify able to post job ad with valid details
 * 5. Post a job without available slot
 * 6. Change posted job with new job ad when there's no more available slot
 * 6. Verify duplicate error message appear when submitted duplicated job
 * 7. Verify able to edit the posted job ad
 */

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'))
    })

    it.only("Verify the Job form elements are visible", () => {
        SGJobPostPage.GotoPostNewJobForm()
        // SGJobPostPage.VerifyJobFormElements()
        SGJobPostPage.VerifyJobFormElements('parkingLot')
        // Verify dynamically
    })

    // it("Verify Cancel button redirects back to Active job list", () => {
    //     SGJobPostPage.GotoPostNewJobForm();
    //     SGJobPostPage.ClickCancelButton();
    // });

    // it("Verify Required error message when Job form is submitted empty", () => {
    //     SGJobPostPage.GotoPostNewJobForm();
    //     SGJobPostPage.ClickPostNewJobBtn();
    //     SGJobPostPage.VerifyRequiredErrMsg();
    // });

    // it("Verify able to Post a new job with valid job details", () => {
    //     SGJobPostPage.GotoPostNewJobForm();
    //     SGJobPostPage.FillPostNewJobForm("");
    //     SGJobPostPage.ClickPostNewJobBtn();
    //     SGJobPostPage.ExpireTheJob();
    // });

    // it("Verify able to Post a job without filling up the optional details", () => {
    //     SGJobPostPage.GotoPostNewJobForm();
    //     SGJobPostPage.FillPostNewJobForm("");
    //     SGJobPostPage.ClickPostNewJobBtn();
    //     SGJobPostPage.ExpireTheJob();
    // });

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