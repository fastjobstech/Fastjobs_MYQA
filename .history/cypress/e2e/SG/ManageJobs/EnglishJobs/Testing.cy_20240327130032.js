import LoginPage from "../../../../pages/SG/User/LoginPage";
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

describe("Expire JOb", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('SG_DE_Username'), Cypress.env('SG_DE_Password'))
        cy.get('.col-sm-12 > .nav > :nth-child(2) > a').click()
        cy.url().should('contain','/p/my-activity/jobs/')
    })

    // it("Verify able to Post a new job with valid job details", () => {
    //     SGJobPostPage.GotoPostNewJobForm()
    //     SGJobPostPage.FillPostNewJobForm('', 'directEmployer')
    //     SGJobPostPage.ClickPostNewJobBtn()
    //     SGJobPostPage.ConfirmSubmit()
    // })

    // it('cypreses testing', () => {
    //     cy.visit('https://example.cypress.io')
    //     cy.getCookie('showWizard')
    //         .then((val) => {
    //             if (val) {
    //             // dismiss the wizard conditionally by enqueuing these
    //             // three additional commands
    //             cy.get('#wizard').contains('Close').click()
    //             }
    //         })

    // })

    it('Verify if job card is displayed', () => {
        // const $jobCard = Cypress.$('.page-title');
        // cy.get('.job-ad', {timeout: 0})
        // .then(($jobAd) => {
        //     if ($jobAd.is(':visible')){
        //         cy.log('JOB CARD IS VISIBLE')
        //     }
        // })
        // .catch((error) => {
        //     cy.log('JOB CARD IS HIDDEN')
        // })

        // cy.get('.job-ad', { timeout: 1000 }) // Set a shorter timeout
        // .then(($jobAd) => {
        //     if ($jobAd.length > 0 && $jobAd.is(':visible')) {
        //         cy.log('JOB CARD IS VISIBLE');
        //     } else {
        //         cy.log('JOB CARD IS HIDDEN');
        //     }
        // })
        // .catch((error) => {
        //     cy.log('JOB CARD IS HIDDEN');
        // });


        cy.get('.job-ad', { timeout: 1000 })
        .should('be.visible')
        .then(($jobAd) => {
            cy.log('JOB CARD IS VISIBLE');
        })
        .catch(() => {
            cy.log('JOB CARD IS HIDDEN');
        });

        
    })

})