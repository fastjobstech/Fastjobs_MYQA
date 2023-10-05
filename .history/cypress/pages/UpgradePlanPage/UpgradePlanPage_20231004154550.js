const { get } = require("selenium-webdriver/http")

class UpgradePlan {
    elements = {
        // Upgrade plan elements
        upgradePlanNavlink: () => cy.get(".nav > .plan-upgrade-nav > a"),
        packagePlan: () => cy.get(":nth-child(1) > .plan-box > .form-get-plan > .btn"),
        checkoutButton: () => cy.get(".col-sm-8 > .btn"),

        demo2pcpElements: {
            SubmitButton: () => cy.get("#btnCCSubmit"),

            //Error messages elements
            CardNumberErrorMessage: () => cy.get("#err_credit_card_number"),
            CardHolderNameErrorMessage: () => cy.get("#err_credit_card_holder_name"),
            CardExpiryErrorMessage: () => cy.get("#err_credit_card_expiry"),
            CVVErrorMessage: () => cy.get("#err_credit_card_cvv"),
            BankNameErrorMessage: () => cy.get("#err_credit_card_issuing_bank_name")
        }
    }

    ClickUpgradePlan = () => {
        this.elements.upgradePlanNavlink().click()
    }

    SelectPackage = () => {
        this.elements.packagePlan().click()
        cy.location('pathname').should('contains', "/p/buy/checkout")
    }

    ClickCheckoutButton = () => {
        this.elements.checkoutButton().click()
    }

    SubmitCheckoutFormEmpty = () => {
        cy.oirigin("https://demo2.2c2p.com", () =>{
            cy.url().should('contains', '/2C2PFrontEnd/RedirectV3/payment/Accept')

            this.elements.demo2pcpElements.SubmitButton().click()

            this.elements.demo2pcpElements.CardNumberErrorMessage().should('be.visible')
            this.elements.demo2pcpElements.CardHolderNameErrorMessage().should('be.visible')
            this.elements.demo2pcpElements.CardExpiryErrorMessage().should('be.visible')
            this.elements.demo2pcpElements.CVVErrorMessage().should('be.visible')
            this.elements.demo2pcpElements.BankNameErrorMessage().should('be.visible')
        })
    }
}

module.exports = new UpgradePlan();