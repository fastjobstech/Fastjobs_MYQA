
describe("Expire JOb", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    })

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"))
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'))
    })

    it('Verify if job card is displayed', () => {
        cy.get('jobCardElement').then((jobCard) => {
            if(jobCard.is(':visible')) {
                cy.log('VISIBLE')
            } else {
                cy.log('NOT VISIBLE')
            }
        })
    })
    
})