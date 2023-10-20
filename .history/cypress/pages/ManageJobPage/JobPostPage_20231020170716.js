class JobPostPage {
    elements = {
        ManageJobsNavlink: () => cy.get('.container > .row > .col-sm-12 > .nav > :nth-child(2) > a'),
        ManageJobsPostNewJobBtn: () => cy.get('.pull-right > .btn'),

        //Expire elements
        ExpireJobBtn: () => cy.get('.btn-expire'),
        ConfirmExpireJob: () => cy.get('#modal-confirm-expire > .modal-dialog > .modal-content > form > .modal-active-buttons > .modal-active-submit'),
        
        //Job form elements
        JobTitle: () => cy.get('#jobTitleInput'),
        Salary: () => cy.get('#maxsals'),
        JobDescription: () => cy.get('div.rx-editor-container'),
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

        //Cancel & Submit buttons
        CancelBtn: () => cy.get('#btnCancelJobPost'),
        ConfirmCancelBtn: () => cy.get('.iziToast-buttons > .btn-danger'),
        PostNewJobBtn: () => cy.get('#btnSubmitJobPost'),
        ConfirmSubmitJob: () => cy.get('#confirm-btn'),
        BottomSaveAsDraftBtn: () => cy.get(':nth-child(3) > .btn'),

        //Error message element
        NewJobFormRequiredErrMsg: () => cy.get('.help-block'),

        //Package
        NormalPosting7Days: () => cy.get(':nth-child(2) > .col-xs-2 > .control > .control__indicator'),

        //Success message
        SuccessMsg: () => cy.get('.iziToast-body'),

        //Rating modal
        RatingModal: () => cy.get('#ratingModal'),
        // CloseModal: () => 
    }
    // List of Functions
    GoToPostNewJobForm = () => {
        this.elements.ManageJobsNavlink().click()
        this.elements.ManageJobsPostNewJobBtn().click()
    }

    ClickCancelButton = () => {
        this.elements.CancelBtn().click()
        this.elements.ConfirmCancelBtn().click()
    }

    ClickPostNewJobBtn = () => {
        this.elements.PostNewJobBtn().click()
    }

    ConfirmSubmit = () => {
        this.elements.ConfirmSubmitJob().click()
    }

    VerifySuccessMsg = () => {
        this.elements.SuccessMsg().should("be.visible")
    }
    
    ExpireTheJob = () => {
        this.elements.ExpireJobBtn().click()
        this.elements.ConfirmExpireJob().click()
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
            jobDesc: "This is a automated testing, DO NOT APPLY!",
            applyByEmail: "kimjay.luta@fastco.asia",
            applyByCallSms: "911911978"
        }
        this.elements.JobTitle().type(JobInfo.jobTitle)
        this.elements.JobDescription()
            .find('.rtf-content[contenteditable="true"]')
            .type(JobInfo.jobDesc, {force: true})

        this.elements.Location().select(8)
        this.elements.SubLocation().select(10)
        this.elements.JobCategory().select(5)
        this.elements.JobCategoryTwo().select(10)
        this.elements.JobTypePartTime().click()
        this.elements.JobTypeFullTime().click()
        this.elements.ApplyByEmail().type(JobInfo.applyByEmail)
        this.elements.ApplyByCallSms().type(JobInfo.applyByCallSms)
        this.elements.NormalPosting7Days().click()
    }
}

module.exports = new JobPostPage() 
