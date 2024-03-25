/// <reference types = "Cypress" />
import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("SG Job Posting", () => {
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
        SGJobPostPage.VerifyJobPostFormElements()
        SGJobPostPage.VerifyRASection()
    })

    it("Verify Cancel button redirects back to Active job list", () => {
        SGJobPostPage.GotoPostNewJobForm()
        SGJobPostPage.ClickCancelButton()
    })

    //Skip the test for now issue (FJEMP-3581)
    it.skip("Verify Required error message when Job form is submitted empty", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.ClickPostNewJobBtn();
        SGJobPostPage.VerifyRequiredErrMsg(); 
    });

    it.only("Post new job ad with Agency information included", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.ClickPostNewJobBtn();
        SGJobPostPage.FillPostNewJobForm("");
        // SGJobPostPage.ClickPostNewJobBtn();
        // Confirm warning modal
        // Verify job is posted
        SGJobPostPage.ExpireTheJob();

    })

    // Post without Agency Info in JD
    // Post featured Job
    // Post without optional details
    // Verify error notification appears when submitted a job that was already posted.
    // Verify able to edit the active job

})