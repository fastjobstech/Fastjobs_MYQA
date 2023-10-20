class JobPostPage {
    elements = {
        JobTitle: () => cy.get('#jobTitleInput'),
        Salary: () => cy.get('#maxsals'),
        JobDescription: () => cy.get('.rx-editor'),
        Location: () => cy.get('#jobRegion'),
        SubLocation: () => cy.get('#jobCity'),
        WorkingPlace: () => cy.get('#c9jobs-building'),
        JobCategory: () => cy.get('#c9jobs-category'),
        JobCategoryTwo: () => cy.get('#c9jobs-category2'),
        JobTypePartTime: () => cy.get(':nth-child(1) > .checkbox-box'),
        JobTypeFullTime: () => cy.get(':nth-child(2) > .checkbox-box'),
        JobTypeContracts: () => cy.get(':nth-child(3) > .checkbox-box'),
        Timing: () => cy.get('#c9jobs-timingc'),
        FilterApplicants: () => cy.get('#c9jobs-appfilterflag'),
        ApplyByEmail: () => cy.get('#c9jobs-appdirecteml'),
        ApplyByCallSms: () => cy.get('#c9jobs-appdirectmobn'),
        AppyByWhatsapp: () => cy.get('#c9jobs-appwhatsapp')
    }

    CheckELements = () => {
        this.elements.JobTitle().should("be.visible")
        this.elements.Salary().should("be.visible")
    }
}

module.exports = new JobPostPage() 