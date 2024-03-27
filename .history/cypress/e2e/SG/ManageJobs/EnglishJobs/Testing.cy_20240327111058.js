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
        cy.get('a').contains('English Jobs').click()
        cy.url().contains('/p/my-activity/jobs/')
        
        cy.get('.panel-body').then((jobCard) => {
            if(jobCard.is(':visible')) {
                cy.log('VISIBLE')
            } else {
                cy.log('NOT VISIBLE')
            }
        })
    })

})