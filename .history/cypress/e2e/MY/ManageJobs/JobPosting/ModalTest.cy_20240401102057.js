import LoginPage from "../../../../pages/MY/UserPages/LoginPage"
import JobPostPage from "../../../../pages/MY/ManageJobPage/JobPostPage"

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit("/");
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'));
    });

    it("Verify if Feedback modal is displayed", () => {
        cy.get('div.container').then(($el) => {
            const feedbackModalElement = $el.find('#ratingModal > .modal-dialog')
            if (feedbackModalElement.length > 0) {
                cy.log('Modal is visible')

            } else {
                cy.log('Not visible.');
            }

            cy.log(feedbackModalElement)

        })
    })
})