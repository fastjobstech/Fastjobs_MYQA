class UpgradePlan {
    elements = {
        // Upgrade plan elements
        upgradePlanNavlink: () => cy.get(".nav > .plan-upgrade-nav > a"),
        packagePlan: () => cy.get(":nth-child(1) > .plan-box > .form-get-plan > .btn"),
        checkoutButton: () => cy.get(".col-sm-8 > .btn"),
        SubmitButton: () => cy.get("#btnCCSubmit"),
        CardNumberErrorMessage: () => cy.get("#err_credit_card_number"),
        CardHolderNameErrorMessage: () => cy.get("#err_credit_card_holder_name"),
        CardExpiryErrorMessage: () => cy.get("#err_credit_card_expiry"),
        CVVErrorMessage: () => cy.get("#err_credit_card_cvv"),
        BankNameErrorMessage: () => cy.get("#err_credit_card_issuing_bank_name"),
        demo2pcpUrl: () => "https://demo2.2c2p.com"
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
        this.elements.SubmitButton().click()
        this.elements.CardNumberErrorMessage().should('be.visible')
        this.elements.CardHolderNameErrorMessage().should('be.visible')
        this.elements.CardExpiryErrorMessage().should('be.visible')
        this.elements.CVVErrorMessage().should('be.visible')
        this.elements.BankNameErrorMessage().should('be.visible')
    }
}

module.exports = new UpgradePlan();