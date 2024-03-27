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

    it('Verify if job card is displayed', () => {
        cy.get('.col-sm-12 > .nav > :nth-child(2) > a').click()
        cy.url().should('contain','/p/my-activity/jobs/')
        
        if(cy.get('.panel-body').is(':visible')) {
            cy.log('VISIBLE')
        } else {
            cy.log('NOT VISIBLE')
        }
    })

})