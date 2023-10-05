import UpgradePlanPage from "../../pages/UpgradePlanPage/UpgradePlanPage";
import LoginPage from "../../pages/UserPages/LoginPage";

describe("Upgrade Plan", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err);
        return false;
    });

    beforeEach(() => {
        cy.visit("/");
        LoginPage.loginEmployer(Cypress.env('login_username'), Cypress.env('login_password'))
    });

    it("Verify checkout form with empty fields", () =>{
        /**
         * What are the steps?
         */
    })
})