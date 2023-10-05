import UpgradePlan from "../../pages/UpgradePlan/CheckoutPage.js";
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

    it("2PCP Checkout | Verify required fields", () =>{
        UpgradePlan.ClickUpgradePlan();
        UpgradePlan.SelectPackage();
        UpgradePlan.ClickCheckoutButton();
        UpgradePlan.SubmitCheckoutFormEmpty();
    })
})