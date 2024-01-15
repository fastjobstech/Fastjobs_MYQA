import LoginPage from "../../../pages/SG/User/LoginPage";
import UpgradePlan from "../../../pages/SG/UpgradePlanPage";

describe("Upgrade Plan", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    });

    beforeEach(() => {
        cy.visit(Cypress.env("employerSG"));
        LoginPage.loginEmployer(Cypress.env('SG_DE_Username'), Cypress.env('SG_DE_Password'));
    });

    it("Verify Required fields in Billing information form", () => {
    });
});