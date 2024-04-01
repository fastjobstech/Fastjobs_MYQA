import LoginPage from "../../../../pages/MY/UserPages/LoginPage"
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage"

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit("/");
        LoginPage.loginEmployer(Cypress.env('ra_username'), Cypress.env('ra_password'))
        // LoginPage.loginEmployer("kimjay.luta@fastjobs.ph", "Password123")
    })

    it("Verify if Feedback modal is displayed", () => {
        cy.get('body').then(($el) => {
            cy.wait(200)
            const feedbackModalElement = $el.find('#ratingModal')

            if (feedbackModalElement.length > 0 && feedbackModalElement.is(':visible')) {
                cy.log('Modal is visible')
                //Submits feedback or close the modal?
                cy.get('#rating5').click()
                cy.get('.rating-comments > textarea').type('This is automated Testing!')
                cy.get('.rating-submit').click()

                //Success modal
                cy.get('#ratingSuccessModal > .modal-dialog > .modal-content > .modal-header > .modal-close').click()
                
            } else {
                cy.log('Not visible.');
            }

            cy.log(feedbackModalElement)
        })
    })
})