class SGUpgradePlan {
    elements = {
        //UpgradePlan link
        upgradePlanLink: () => cy.get('.col-sm-12 > .nav > :nth-child(10) > a'),

        // Choose Plan
        choosePlanBtn: () => cy.get(':nth-child(1) > .package__card > .package__footer > .package__btn'),
    
        //Billing Information
        fullNameField: () => cy.get('#c9billinfo-fullm'),
        emailField: () => cy.get('#c9billinfo-eml'),
        telNoField: () => cy.get('#c9billinfo-mobn'),
        companyNameField: () => cy.get('#c9billinfo-coym'),
        buildingField: () => cy.get('#c9billinfo-bldg'),
        streetNameField: () => cy.get('#c9billinfo-streetm'),
        blockNoField: () => cy.get('#c9billinfo-blkn'),
        floorNoField: () => cy.get('#c9billinfo-flrn'),
        postalCodeField: ()=> cy.get('#c9billinfo-pstc'),
        cityField: () => cy.get('#c9billinfo-cityc'),
        countryField: () => cy.get('#c9billinfo-country'),

        //Payment Details 
        cardNameField: () => cy.get('#card-name'), 
        cardNumberField: () => cy.get('#card-number'),
        expDateField: () => cy.get('#expiration-date'),
        securityCodeField: () => cy.get('#cvv'),

        //Review
        reviewEditButton: () => cy.get('#payment-edit-btn'),
        changePlanButton: () => cy.get('#cancel'),
        confirmPaymentButton: () => cy.get('#pay'),

        //Invoice
        // downloadInvoiceButton: () => 
    }

    ClickUpgradPlanLink = () => {
        this.elements.upgradePlanLink().click();
        cy.location('pathname').should('contains', '')
    }
    
    SelectPackage = () => {

    }

    DownloadInvoice = () => {

    }

    EditPaymentButton = () => {

    }
    
    SubmitBillingInformationEmpty = () => {

    }
    
    SubmitBillingInformation = () => {

    }
    
    SubmitWithInvalidPaymentDetails = () => {
        
    }

    SubmitPaymentDetailsEmpty = () => {

    }

}