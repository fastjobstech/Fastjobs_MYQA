import LoginPage from "../../pages/UserPages/LoginPage"
import JobPostPage from "../../pages/ManageJobPage/JobPostPage"

describe("Job posting", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    });

    beforeEach(() => {
        cy.visit("/")
        LoginPage.loginEmployer(Cypress.env('login_username'), Cypress.env('login_password'))
    });

    it("Verify checkout required fields", () => {

    })
})