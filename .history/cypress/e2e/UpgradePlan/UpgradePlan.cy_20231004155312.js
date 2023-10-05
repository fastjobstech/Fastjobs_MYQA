import UpgradePlan from "../../pages/UpgradePlan/CheckoutPage";
import LoginPage from "../../pages/UserPages/LoginPage";

describe("Upgrade Plan", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err);
        return false;
    });

    beforeEach(() => {
        cy.visit("/");
    });

    it("2PCP Checkout | Verify required fields", () =>{
        LoginPage.loginEmployer(Cypress.env('login_username'), Cypress.env('login_password'))

        UpgradePlan.ClickUpgradePlan();
        UpgradePlan.SelectPackage();
        UpgradePlan.ClickCheckoutButton();
        UpgradePlan.SubmitCheckoutFormEmpty();
    })
})