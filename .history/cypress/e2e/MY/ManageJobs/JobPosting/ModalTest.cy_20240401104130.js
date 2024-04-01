import LoginPage from "../../../../pages/MY/UserPages/LoginPage"
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage"

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit("/");
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'))
        // LoginPage.loginEmployer("kimjay.luta@fastjobs.ph", "Password123")
    })

    it("Verify if Feedback modal is displayed", () => {
        cy.get('body').then(($el) => {
            const feedbackModalElement = $el.find('#ratingModal')

            if (feedbackModalElement.is(':visible')) {
                cy.log('Modal is visible')
                //Submits feedback or close the modal?
                cy.get('#rating5').click()
                cy.get('.rating-comments > textarea').type('This is automated Testing!')
                cy.get('.rating-submit').click()

                //Success modal
                cy.get('#ratingSuccessModal').should('contains', 'Thank you!')
                
            } else {
                cy.log('Not visible.');
            }

            cy.log(feedbackModalElement)
        })
    })
})