class JobPostPage {
    elements = {
        ManageJobsNavlink: () => cy.get('.container > .row > .col-sm-12 > .nav > :nth-child(2) > a'),
        ManageJobsPostNewJobBtn: () => cy.get('.pull-right > .btn'),
        JobTitle: () => cy.get('#jobTitleInput'),
        Salary: () => cy.get('#maxsals'),
        JobDescription: () => cy.get('.rx-editor > .rx-reset > .rx-content > .rtf-content'),
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
        AppyByWhatsapp: () => cy.get('#c9jobs-appwhatsapp'),
        CancelBtn: () => cy.get('#btnCancelJobPost'),
        ConfirmCancelBtn: () => cy.get('.iziToast-buttons > .btn-danger'),
        PostNewJobBtn: () => cy.get('#btnSubmitJobPost'),
        BottomSaveAsDraftBtn: () => cy.get(':nth-child(3) > .btn'),

        //Error message element
        NewJobFormRequiredErrMsg: () => cy.get('.help-block')
    }

    GoToPostNewJobForm = () => {
        this.elements.ManageJobsNavlink().click()
        this.elements.ManageJobsPostNewJobBtn().click()
    }

    CheckELements = () => {
        this.elements.JobTitle().should("be.visible")
        this.elements.Salary().should("be.visible")
        this.elements.JobDescription().should("be.visible")
        this.elements.Location().should("be.visible")
        this.elements.SubLocation().should("be.visible")
        this.elements.WorkingPlace().should("be.visible")
        this.elements.JobCategory().should("be.visible")
        this.elements.JobCategoryTwo().should("be.visible")
        this.elements.JobTypePartTime().should("be.visible")
        this.elements.JobTypeFullTime().should("be.visible")
        this.elements.JobTypeContracts().should("be.visible")
        this.elements.Timing().should("be.visible")
        this.elements.FilterApplicants().should("be.visible")
        this.elements.ApplyByEmail().should("be.visible")
        this.elements.ApplyByCallSms().should("be.visible")
        this.elements.AppyByWhatsapp().should("be.visible")
        this.elements.PostNewJobBtn().should("be.visible")
    }

    ClickCancelButton = () => {
        this.elements.CancelBtn().click()
        this.elements.ConfirmCancelBtn().click()
    }

    SubmitJobForm = () => {
        this.elements.PostNewJobBtn().click()
    }

    VerifyRequiredErrMsg = () => {
        const RequiredText = [
            "Please enter Job Title",
            "Please enter Description",
            "Please enter Location",
            "Please enter Sub Location",
            "Please enter Job Category",
            "Please enter Job Type",
            "Please enter your preferred mode of application."
        ]
        this.elements.NewJobFormRequiredErrMsg().should("be.visible")
        RequiredText.forEach((errText) => {
            this.elements.NewJobFormRequiredErrMsg().contains(errText)
        })
    }

    FillPostNewJobForm = () => {
        const JobInfo = {
            jobTitle: "AUTOMATED JOB POST (DO NOT APPLY!!!)",
            jobDesc: "This is a automated testing, DO NOT APPLY!"
        }
        this.elements.JobTitle().type(JobInfo.jobTitle)
        this.elements.JobDescription().type(JobInfo.jobDesc)
        this.elements.Location().select(8)
    }
}

module.exports = new JobPostPage() 
