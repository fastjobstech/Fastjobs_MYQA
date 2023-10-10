class UpgradePlan {
    elements = {
        // Upgrade plan elements
        upgradePlanNavlink: () => cy.get(".nav > .plan-upgrade-nav > a"),
        packagePlan: () => cy.get(":nth-child(1) > .plan-box > .form-get-plan > .btn"),
        checkoutButton: () => cy.get(".col-sm-8 > .btn"),
        SubmitButton: () => cy.get("#btnCCSubmit"),
        
        fullNameField: () => cy.get("#c9billinfo-fullm"),
        emailNameField: () => cy.get("#c9billinfo-eml"),
        mobileNameField: () => cy.get("#c9billinfo-mobn"),
        compNameField: () => cy.get("#c9billinfo-coym"),

        checkoutRequiredErrMsg: () => cy.get(".form-group > .help-block"),

        //2pcp Elements
        CardNumberErrorMessage: () => cy.get("#err_credit_card_number"),
        CardHolderNameErrorMessage: () => cy.get("#err_credit_card_holder_name"),
        CardExpiryErrorMessage: () => cy.get("#err_credit_card_expiry"),
        CVVErrorMessage: () => cy.get("#err_credit_card_cvv"),
        BankNameErrorMessage: () => cy.get("#err_credit_card_issuing_bank_name"),
        demo2pcpUrl: () => "https://demo2.2c2p.com"
    }

    ClickUpgradePlanLink = () => {
        this.elements.upgradePlanNavlink().click()
    }

    SelectPackage = () => {
        this.elements.packagePlan().click()
        cy.location('pathname').should('contains', "/p/buy/checkout")
    }

    ClickCheckoutButton = () => {
        this.elements.checkoutButton().click()
    }
    
    //FastJobs checkout flow
    SubmitCheckoutFormEmpty = () => {
        this.elements.fullNameField().clear()
        this.elements.emailNameField().clear()
        this.elements.mobileNameField().clear()
        this.elements.compNameField().clear()
        this.ClickCheckoutButton()
        this.elements.checkoutRequiredErrMsg().should("be.visible")
    }

    SubmitInvalidDetails = () => {
        this.elements.fullNameField().clear()
        this.elements.emailNameField()
            .clear()
            .type("invalid email")
        this.elements.mobileNameField()
            .clear()
            .type("123ABC")
        this.elements.compNameField().clear()
        this.ClickCheckoutButton()
        this.elements.checkoutRequiredErrMsg().should("be.visible")
    }

    //2pcp Checkout flow
    CheckoutSubmitFormEmpty = () => {
        cy.origin('https://demo2.2c2p.com', () =>{
            // Verify URL
            cy.url().should('contains', '/2C2PFrontEnd/RedirectV3/payment/Accept')

            cy.get('#btnCCSubmit').click()

            // Verify error messages
            cy.get('#err_credit_card_number').should('be.visible')
            cy.get('#err_credit_card_holder_name').should('be.visible')
            cy.get('#err_credit_card_expiry').should('be.visible')
            cy.get('#err_credit_card_cvv').should('be.visible')
            cy.get('#err_credit_card_issuing_bank_name').should('be.visible')
        })
    }

    CheckoutWithInvalidDetails = () => {
        cy.origin('https://demo2.2c2p.com', () => {
            // Verify URL
            cy.url().should('contains', '/2C2PFrontEnd/RedirectV3/payment/Accept')

            // Enter invalid details
            cy.get('#credit_card_number').type('4111')
            cy.get('#credit_card_holder_name').type('Kim Jay 123')
            cy.get('#credit_card_expiry_month').type('12')
            cy.get('#credit_card_expiry_year').type('27')
            cy.get('#credit_card_cvv').type('01')
            cy.get('#credit_card_issuing_bank_name').type('FastJobs Bank')

            // Submit the form
            cy.get('#btnCCSubmit').click()

            // Verify error messages
            cy.get('#err_credit_card_number').should('be.visible')
            cy.get('#err_credit_card_holder_name').should('be.visible')
            cy.get('#err_credit_card_expiry').should('be.visible')
            cy.get('#err_credit_card_cvv').should('be.visible')
        })
    }

    CheckoutWithValidDetails = () => {
        cy.origin('https://demo2.2c2p.com', () => {
            // Verify URL
            cy.url().should('contains', '/2C2PFrontEnd/RedirectV3/payment/Accept')

            // Enter valid details
            cy.get('#credit_card_number').type('4111111111111111')
            cy.get('#credit_card_holder_name').type('Kim Jay')
            cy.get('#credit_card_expiry_month').select('12')
            cy.get('#credit_card_expiry_year').select('2027')
            cy.get('#credit_card_cvv').type('123')
            cy.get('#credit_card_issuing_bank_name').type('FastJobs Bank')

            // Submit the form
            cy.get('#btnCCSubmit').click()
        })
        
        cy.origin('https://demo-emvacs.2c2p.com/', () =>{
            //Confirmation
            cy.get('.proceed').click()

            //OTP
            cy.get('.form-control').type('123456')
            cy.get('.acs-challenge-form-actions > .proceed').click()
            //Return to merchant
            cy.get('.acs-challenge-btn').click()
        })

        cy.origin('https://demo2.2c2p.com', () =>{
            //Verify success
            cy.get('.success').should('be.visible')
        })
    }
}

module.exports = new UpgradePlan();