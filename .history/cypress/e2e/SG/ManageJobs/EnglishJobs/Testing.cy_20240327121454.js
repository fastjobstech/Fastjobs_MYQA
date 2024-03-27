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
        cy.get('.col-sm-12 > .nav > :nth-child(2) > a').click()
        cy.url().should('contain','/p/my-activity/jobs/')
        
        // const $jobCard = Cypress.$('.page-title');
        const $jobCard = Cypress.$('div.panel-body');

        // cy.wait(5000)
        // cy.get('#jobsList').should('be.visible');

        if ($jobCard.length > 0) {
            if ($jobCard.contains('AUTOMATED JOB POST (DO NOT APPLY!!!)').is(':visible')) {
              cy.log('Element is visible');
            } else {
              cy.log('Element exists but is not visible');
            }
        } else {
            cy.log('Element does not exist');
        }

        // if(jobCard.is(':visible')) {
        //     cy.log('VISIBLE')
        // } else {
        //     cy.log('NOT VISIBLE')
        // }

        cy.log($jobCard)
    })

})