class UpgradePlan {
    elements = {
        // Upgrade plan elements
        upgradePlanNavlink: () => cy.get(".nav > .plan-upgrade-nav > a"),
        packagePlan: () => cy.get(":nth-child(1) > .plan-box > .form-get-plan > .btn"),
        checkoutButton: () => cy.get(".col-sm-8 > .btn")
    }

    ClickUpgradePlan = () => {
        this.elements.upgradePlanNavlink().click()
    }

    SelectPackage = () => {
        this.elements.packagePlan().click()
        cy.location('pathname').should('contains', "/p/buy/checkout")
    }

    ClickCheckoutButton = () => {

    }
}

module.exports = new UpgradePlan();