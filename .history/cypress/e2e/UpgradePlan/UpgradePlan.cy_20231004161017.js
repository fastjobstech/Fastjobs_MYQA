import LoginPage from "../../pages/UserPages/LoginPage";
import UpgradePlan from "../../pages/UpgradePlanPage/CheckoutPage";

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
        cy.origin("https://demo2.2c2p.com", () =>{
            cy.url().should('contains', '/2C2PFrontEnd/RedirectV3/payment/Accept')
            UpgradePlan.SubmitCheckoutFormEmpty();
        })
    })
})