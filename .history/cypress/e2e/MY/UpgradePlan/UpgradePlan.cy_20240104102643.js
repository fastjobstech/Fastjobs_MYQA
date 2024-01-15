import LoginPage from "../../../pages/UserPages/LoginPage"
import UpgradePlan from "../../../pages/UpgradePlanPage/CheckoutPage"

describe("Upgrade Plan", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log(err)
        return false
    });

    beforeEach(() => {
        cy.visit("/")
        LoginPage.loginEmployer(Cypress.env('de_username'), Cypress.env('de_password'))
    });

    it("Verify checkout required fields", () => {
        UpgradePlan.ClickUpgradePlanLink()
        UpgradePlan.SelectPackage()
        UpgradePlan.SubmitCheckoutFormEmpty()
    })

    it("Verify error message with invalid inputs", () => {
        UpgradePlan.ClickUpgradePlanLink()
        UpgradePlan.SelectPackage()
        UpgradePlan.SubmitInvalidDetails()
    })

    it("2PCP Checkout | Verify required fields", () =>{
        UpgradePlan.ClickUpgradePlanLink()
        UpgradePlan.SelectPackage()
        UpgradePlan.ClickCheckoutButton()
        UpgradePlan.CheckoutSubmitFormEmpty()
    })

    it("2PCP Checkout | Verify unable to Upgrage plan when there are invalid card details", () => {
        UpgradePlan.ClickUpgradePlanLink()
        UpgradePlan.SelectPackage()
        UpgradePlan.ClickCheckoutButton()
        UpgradePlan.CheckoutWithInvalidDetails()
    })

    it("2PCP Checkout | Verify able to Upgrage plan with valid Card details", () => {
        UpgradePlan.ClickUpgradePlanLink()
        UpgradePlan.SelectPackage()
        UpgradePlan.ClickCheckoutButton()
        UpgradePlan.CheckoutWithValidDetails()
    })
})