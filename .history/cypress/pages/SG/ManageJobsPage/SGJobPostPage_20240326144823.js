class SGJobPostPage {
    elements = {
        //Elements not related to Job posting form
        EnglishJobsNavlink: () => cy.get('.col-sm-12 > .nav > :nth-child(2) > a'),
        PostNewJobBtn: () => cy.get('.pull-right > .btn'),

        // Post new job form elements
        UpPostJobBtn: () => cy.get('#update-job'),
        UpSaveDraftBtn: () => cy.get('.job-actions > .save-draft'),

        // Job Details
        JobTitle: () => cy.get('#jobTitleInput'),
        SalaryDropdownFirst: () => cy.get('#salflag-dt > .btn'),
        SalaryField: () => cy.get('#maxsals'),
        SalaryType: () => cy.get('#salperiod-dt > .btn'),
        JobDescription: () => cy.get('div.rx-editor-container'),
        
        NearestMRT: () => cy.get('#c9jobs-regionc'),
        WorkingPlace: () => cy.get('#c9jobs-building'),
        
        JobCategoryOne: () => cy.get('#c9jobs-category'),
        JobCategoryTwo: () => cy.get('#c9jobs-category2'),
        
        Timing: () => cy.get('#c9jobs-timingc'),
        
        PartTimeJobType: () => cy.get(':nth-child(1) > .checkbox > label'),
        FullTimeJobType: () => cy.get(':nth-child(2) > .checkbox > label'),
        ContractJobType: () => cy.get(':nth-child(3) > .checkbox > label'),
        
        SetOutletsSettingBtn: () => cy.get('.col-xs-12 > :nth-child(3) > .btn'),
        ApplyByEmail: () => cy.get('#c9jobs-appdirecteml'),
        ApplyByCall: () => cy.get('#c9jobs-appdirectmobn'),
        ApplyByWhatsapp: () => cy.get('#c9jobs-appwhatsapp'),
        ApplyBySMS: () => cy.get('#txtAppModeSMSNo'),

        // Preference fields Optional
        EducationLevel: () => cy.get('#c9jobs-edulvlc'),
        JobSkillsOne: () => cy.get(':nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control'),
        JobSkillsTwo: () => cy.get(':nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(2) > .form-control'),
        JobSkillsThree: () => cy.get(':nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(3) > .form-control'),
        JobLanguageOne: () => cy.get(':nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control'),
        JobLanguageTwo: () => cy.get(':nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(2) > .form-control'),
        JobLanguageThree: () => cy.get(':nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(3) > .form-control'),
        ApplicationFilter: () => cy.get('#c9jobs-appfilterflag'),
        ScheduledJobPost: () => cy.get('#c9jobs-scheduledttme-datetime > #c9jobs-scheduledttme'),

        // Packages Default
        PackageSelection: () => cy.get(':nth-child(22) > .col-xs-2 > center > label'),

        CancelBtn: () => cy.get('#cancel-job'),
        JobPostingFormPostNewJobBtn: () => cy.get('#save-job'),
        SaveDraftBtn: () => cy.get('div[data-state="normal"] > .btn'),

        ConfirmSubmitJob: () => cy.get('#confirm-btn'),

        //Error message elements
        NewJobFormRequiredErrMsg: () => cy.get('.help-block'),

        //Duplicate Error message
        DuplicateNotification: () => cy.get('.panel-body'),
        DuplicateMsg: () => cy.get('.panel-body > :nth-child(1) > .col-xs-12'),

        //Expire job elements
        ExpireJobBtn: () => cy.get('.btn-expire'),
        ConfirmExpireJob: () => cy.get('#modal-confirm-expire > .modal-dialog > .modal-content > form > .modal-active-buttons > .modal-active-submit'),

        //Edit Job elements
        EditJobBtn: () => cy.get('.btn-edit'),

        //Copy Job
        CopyJobBtn: () => cy.get('.btn-copy'),

        //Outlet elements

        //RA Elements
        RAAgencyInfoTitle: () => cy.get('h3'),
        RAInfoLines: () => cy.get('.edit-job-ea-info-liner'),
        EALicenseNo: () => cy.get('#job-ea-company'),
        EAPersonnelNo: () => cy.get('#job-ea-personnel'),
        ADOwner: () => cy.get('#job-ea-list'),
        RACheckbox: () => cy.get(':nth-child(6) > .control > .control__indicator'),
        RAProceedButton: () => cy.get('#continue-edit-ea-btn')
    }

    GotoPostNewJobForm = () => {
        this.elements.EnglishJobsNavlink().click()
        this.elements.PostNewJobBtn().click()
    }

    VerifyJobPostFormElements = () => {
        this.elements.UpPostJobBtn().should('be.visible')
        this.elements.UpSaveDraftBtn().should('be.visible')

        this.elements.JobTitle().should('be.visible')

        this.elements.SalaryDropdownFirst().should('be.visible')
        this.elements.SalaryType().should('be.visible')

        this.elements.JobDescription().should('be.visible')
        
        // This section is not displayed when account type is outlet
        // this.elements.NearestMRT().should('be.visible') 
        // this.elements.WorkingPlace().should('be.visible')

        this.elements.JobCategoryOne().should('be.visible')
        this.elements.JobCategoryTwo().should('be.visible')
        this.elements.Timing().should('be.visible')
        this.elements.PartTimeJobType().should('be.visible')
        this.elements.FullTimeJobType().should('be.visible')
        this.elements.ContractJobType().should('be.visible')

        // This section is not displayed when account type is outlet
        // this.elements.SetOutletsSettingBtn().should('be.visible')

        this.elements.ApplyByEmail().should('be.visible')
        this.elements.ApplyByCall().should('be.visible')
        this.elements.ApplyByWhatsapp().should('be.visible')
        this.elements.ApplyBySMS().should('be.visible')
        this.elements.EducationLevel().should('be.visible')
        this.elements.JobSkillsOne().should('be.visible')
        this.elements.JobSkillsTwo().should('be.visible')
        this.elements.JobSkillsThree().should('be.visible')
        this.elements.JobLanguageOne().should('be.visible')
        this.elements.JobLanguageTwo().should('be.visible')
        this.elements.JobLanguageThree().should('be.visible')
        this.elements.ApplicationFilter().should('be.visible')
        this.elements.ScheduledJobPost().should('be.visible')

        // This section is not displayed when account type is Parking lot
        // this.elements.PackageSelection().should('be.visible')

        this.elements.CancelBtn().should('be.visible')
        this.elements.JobPostingFormPostNewJobBtn().should('be.visible')
        this.elements.SaveDraftBtn().should('be.visible')
    }

    VerifyJobFormElements = (AccountType) => {

        //These are the elements that is displayed for all account type
        this.elements.UpPostJobBtn().should('be.visible')
        this.elements.UpSaveDraftBtn().should('be.visible')
        this.elements.JobTitle().should('be.visible')
        this.elements.SalaryDropdownFirst().should('be.visible')
        this.elements.SalaryType().should('be.visible')
        this.elements.JobDescription().should('be.visible')
        this.elements.JobCategoryOne().should('be.visible')
        this.elements.JobCategoryTwo().should('be.visible')
        this.elements.Timing().should('be.visible')
        this.elements.PartTimeJobType().should('be.visible')
        this.elements.FullTimeJobType().should('be.visible')
        this.elements.ContractJobType().should('be.visible')
        this.elements.ApplyByEmail().should('be.visible')
        this.elements.ApplyByCall().should('be.visible')
        this.elements.ApplyByWhatsapp().should('be.visible')
        this.elements.ApplyBySMS().should('be.visible')
        this.elements.EducationLevel().should('be.visible')
        this.elements.JobSkillsOne().should('be.visible')
        this.elements.JobSkillsTwo().should('be.visible')
        this.elements.JobSkillsThree().should('be.visible')
        this.elements.JobLanguageOne().should('be.visible')
        this.elements.JobLanguageTwo().should('be.visible')
        this.elements.JobLanguageThree().should('be.visible')
        this.elements.ApplicationFilter().should('be.visible')
        this.elements.ScheduledJobPost().should('be.visible')
        this.elements.CancelBtn().should('be.visible')
        this.elements.JobPostingFormPostNewJobBtn().should('be.visible')
        this.elements.SaveDraftBtn().should('be.visible')

        if(AccountType == 'outlet') {
            cy.get('.block-grid-item > label').contains('Alor Setar').should('be.visible')
            cy.get('.block-grid-item > label').contains('George Town').should('be.visible')
            cy.get('.block-grid-item > label').contains('Kota Kinabalu').should('be.visible')
            this.elements.PackageSelection().should('be.visible')
        }
    }

    FillPostNewJobForm = (newJobInfo) => {
        const JobInfo = {
            jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
            jobDesc: "This is a automated testing, DO NOT APPLY!",
            applyByEmail: "kimjay.luta@fastco.asia",
            applyByCallSms: "91191197"
        }
        this.elements
            .JobTitle()
            .clear()
            .type(JobInfo.jobTitle)
        this.elements
            .JobDescription()
            .find('.rtf-content[contenteditable="true"]')
            .type(JobInfo.jobDesc, {force: true})

        this.elements.NearestMRT().select(8)
        this.elements.JobCategoryOne().select(5)
        this.elements.JobCategoryTwo().select(10)
        this.elements.PartTimeJobType().click()
        this.elements.FullTimeJobType().click()
        this.elements
            .ApplyByEmail()
            .clear()
            .type(JobInfo.applyByEmail)
        this.elements
            .ApplyBySMS()
            .clear()
            .type(JobInfo.applyByCallSms)
    }

    ClickCancelButton = () => {
        this.elements.CancelBtn().click();
    }

    ClickPostNewJobBtn = () => {
        this.elements.UpPostJobBtn().click()
    }

    ConfirmSubmit = () => {
        this.elements.ConfirmSubmitJob().click()
    }

    ExpireTheJob = () => {
        cy.wait(5000);
        this.elements.ExpireJobBtn().click()
        this.elements.ConfirmExpireJob().click()
    }

    CopyTheJob = () => {
        cy.wait(5000);
        this.elements.CopyJobBtn().click()
    }

    EditTheJob = () => {
        cy.wait(5000);
        this.elements.EditJobBtn().click()
    }

    VerifyLoaderTextIsDisplayed = () => {
        cy.get('.loader-text').should('be.visible')
    }

    VerifyRequiredErrMsg = () => {
        const RequiredText = [
            "Please enter Job Title",
            "Please enter Description",
            "Please enter Nearest MRT",
            "Please enter Job Category",
            "Please enter Job Type",
            "Please enter your preferred mode of application."
        ]
        this.elements.NewJobFormRequiredErrMsg().should("be.visible")
        RequiredText.forEach((errText) => {
            this.elements.NewJobFormRequiredErrMsg().contains(errText)
        });
    }

    VerifyDuplicateNotification = () => {
        const DuplicateMsg = [
            "Oops, this job looks like a copy of an existing active job!",
            "If you would like to proceed, we suggest modifying at least one of these fields to continue:",
            "Job Title",
            "Description",
            "Nearest MRT",
            "Job Type"
        ]
        this.elements.DuplicateNotification().should("be.visible")
        this.elements.DuplicateMsg().should("be.visible")
        DuplicateMsg.forEach((errText) => {
            this.elements.DuplicateMsg().contains(errText)
        })
    }

    //Recruitment Agency
    VerifyRASection = () => {
        this.elements.RAAgencyInfoTitle().contains('Recruitment Agency Info').should('be.visible')
        this.elements.EALicenseNo().should('be.visible')
        this.elements.EAPersonnelNo().should('be.visible')
        this.elements.ADOwner().should('be.visible')
        this.elements.RACheckbox().should('be.visible')
    }

    RAClickProceedButton = () => {
        this.elements.RAProceedButton().click()
    }

    RAClickCheckbox = () => {
        this.elements.RACheckbox().click()
    }
}

module.exports = new SGJobPostPage()