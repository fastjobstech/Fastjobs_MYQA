import LoginPage from "../../../../pages/SG/User/LoginPage";

describe("Expire JOb", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('SG_DE_Username'), Cypress.env('SG_DE_Password'))
        
    })

    it('Verify if job card is displayed', () => {
        cy.get('.col-sm-12 > .nav > :nth-child(2) > a').click()
        cy.url().should('contain','/p/my-activity/jobs/')
        // cy.wait(5000)
        cy.get('#jobsList').then(($jobAdElement) => {
            const findJobCardElement = $jobAdElement.find('.panel-body')
            
            if (findJobCardElement.length > 0) {
                cy.log('May posted job')
                findJobCardElement.each($el => {
                    cy.log('Expire the Job')
                    cy.get('.btn-expire').eq($el).click()
                    cy.get('#modal-confirm-expire > .modal-dialog > .modal-content > form > .modal-active-buttons > .modal-active-submit').click()
                })
            } else {
                cy.log('No Posted job!')
            }
        })
    })

})