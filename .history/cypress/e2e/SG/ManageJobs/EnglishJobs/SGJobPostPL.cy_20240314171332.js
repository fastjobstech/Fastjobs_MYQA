import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'));
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

    it("Verify able to Post a new job with valid job details", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.FillPostNewJobForm("");
        SGJobPostPage.ClickPostNewJobBtn();
        SGJobPostPage.ExpireTheJob();
    });

    it("Verify able to Post a job without filling up the optional details", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.FillPostNewJobForm("");
        SGJobPostPage.ClickPostNewJobBtn();
        SGJobPostPage.ExpireTheJob();
    });

    it.only("Verify error notification appears when submitted a job that was already posted.", () => {
        SGJobPostPage.GotoPostNewJobForm();
        SGJobPostPage.FillPostNewJobForm("");
        SGJobPostPage.ClickPostNewJobBtn();

        //Copy the same job
        SGJobPostPage.CopyTheJob();
        SGJobPostPage.ClickPostNewJobBtn();

        //Duplicate Job Error
        SGJobPostPage.VerifyDuplicateNotification();
        SGJobPostPage.ClickCancelButton();
        SGJobPostPage.ExpireTheJob();
    });

})