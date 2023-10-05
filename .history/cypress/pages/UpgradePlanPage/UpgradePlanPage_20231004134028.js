class UpgradePlan {
    elements = {
        // Upgrade plan elements
        upgradePlanNavlink: () => cy.get(".nav > .plan-upgrade-nav > a")
    }

    // Test Steps
    ClickUpgradePlan = () => {
        this.elements.upgradePlanNavlink().click()
    }
}

module.exports = new UpgradePlan();