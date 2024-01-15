class JobPostPage {
    elements = {
        // Elements not related inside of Posting job form
        ManageJobsNavlink: () => cy.get('.container > .row > .col-sm-12 > .nav > :nth-child(2) > a'),
        ManageJobsPostNewJobBtn: () => cy.get('.pull-right > .btn'),

        // EDIT JOB
        EditJobBtn: () => cy.get('.btn-edit'),
        // Copy elements
        CopyJobBtn: () => cy.get('.btn-copy'),

        //Expire elements
        ExpireJobBtn: () => cy.get('.btn-expire'),
        ConfirmExpireJob: () => cy.get('#modal-confirm-expire > .modal-dialog > .modal-content > form > .modal-active-buttons > .modal-active-submit'),
        
        //Job form elements
        JobTitle: () => cy.get('#jobTitleInput'),

        SalaryFlag: () => cy.get('#salflag-dt > .btn'),
        SalaryFlagDropdown: () => cy.get(':nth-child(2) > .dropdown-sal-flag'),
        Salary: () => cy.get('#maxsals'),
        SalaryPeriod: () => cy.get('#jobSalPeriodDp > .btn'),
        SalaryPeriodDropdown: () => cy.get(':nth-child(4) > .dropdown-sal-period'),
        
        JobDescription: () => cy.get('div.rx-editor-container'),
        
        Location: () => cy.get('#jobRegion'),
        SubLocation: () => cy.get('#jobCity'),
        WorkingPlace: () => cy.get('#c9jobs-building'),
        WorkingPlaceSelect: () => cy.get('#ui-id-2'),
        
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

        //Preferences
        EducLevel: () => cy.get('#c9jobs-edulvlc'),
        JobSkills: () => cy.get(':nth-child(2) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control'),
        JobLanguage: () => cy.get(':nth-child(3) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control'),

        //Cancel & Submit buttons
        CancelBtn: () => cy.get('#btnCancelJobPost'),
        ConfirmCancelBtn: () => cy.get('.iziToast-buttons > .btn-danger'),
        PostNewJobBtn: () => cy.get('#btnSubmitJobPost'),
        ConfirmSubmitJob: () => cy.get('#confirm-btn'),
        BottomSaveAsDraftBtn: () => cy.get(':nth-child(3) > .btn'),

        //Error message element
        NewJobFormRequiredErrMsg: () => cy.get('.help-block'),

        //Package
        PackageType: (packageType) => cy.get(`:nth-child(${packageType}) > .col-xs-2 > .control > .control__indicator`),

        //Success message
        SuccessMsg: () => cy.get('.iziToast-body'),

        //Rating modal
        RatingModal: () => cy.get('#ratingModal'),
        
        //Duplicate Notification elements
        DuplicateNotification: () => cy.get('#duplicate-detection'),
        DuplicateMsg: () => cy.get('.panel-body > :nth-child(1) > .col-xs-12'),

        //Outlet elements
        OutletField: () => cy.get('#linkSelectOutlet'),
        OutletModal: () => cy.get('#outletsModal'),
        OutletSelectionOne: () => cy.get(':nth-child(2) > .panel-body > .block-grid-xs-1 > .block-grid-item > .control > .control__indicator'),
        OutletSelectionTwo: () => cy.get(':nth-child(3) > .panel-body > .block-grid-xs-1 > .block-grid-item > .control > .control__indicator'),
        OutletConfirmButton: () => cy.get('#btnSelectOutlet'),
        OutletCloseIcon: () => cy.get('[aria-hidden="true"] > .fa')
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
        cy.wait(5000)
        this.elements.SuccessMsg().should("be.visible")
    }
    
    ExpireTheJob = () => {
        this.elements.ExpireJobBtn().click()
        this.elements.ConfirmExpireJob().click()
    }

    SelectPackage = (packageType) => {
        this.elements.PackageType(packageType).click()
    }

    EditTheJob = () => {
        this.elements.EditJobBtn().click()
    }

    CopyTheJob = () => {
        this.elements.CopyJobBtn().click()
    }

    VerifyDuplicateNotification = () => {
        const DuplicateMsg = [
            "Oops, this job looks like a copy of an existing active job!",
            "If you would like to proceed, we suggest modifying at least one of these fields to continue:",
            "Job title",
            "Description",
            "Location/Sub-location",
            "Job Type"
        ]
        this.elements.DuplicateNotification().should("be.visible")
        this.elements.DuplicateMsg().should("be.visible")
        DuplicateMsg.forEach((errText) => {
            this.elements.DuplicateMsg().contains(errText)
        })
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

    FillPostNewJobForm = (newJobInfo) => {
        const JobInfo = {
            jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
            jobDesc: "This is a automated testing, DO NOT APPLY!",
            applyByEmail: "kimjay.luta@fastco.asia",
            applyByCallSms: "911911978"
        }
        this.elements
            .JobTitle()
            .clear()
            .type(JobInfo.jobTitle)
        this.elements
            .JobDescription()
            .find('.rtf-content[contenteditable="true"]')
            .type(JobInfo.jobDesc, {force: true})

        this.elements.Location().select(8)
        this.elements.SubLocation().select(10)
        this.elements.JobCategory().select(5)
        this.elements.JobCategoryTwo().select(10)
        this.elements.JobTypePartTime().click()
        this.elements.JobTypeFullTime().click()
        this.elements
            .ApplyByEmail()
            .clear()
            .type(JobInfo.applyByEmail)
        this.elements
            .ApplyByCallSms()
            .clear()
            .type(JobInfo.applyByCallSms)
    }

    FillOptionalFields = () => {
        this.elements.SalaryFlag().click()
        this.elements.SalaryFlagDropdown().click()
        this.elements.Salary().type("100")
        this.elements.SalaryPeriod().click()
        this.elements.SalaryPeriodDropdown().click()

        this.elements.WorkingPlace().type("Test")
        this.elements.WorkingPlaceSelect().click()
        this.elements.Timing().select(1)

        this.elements.EducLevel().select(5)
        this.elements.JobSkills().select(1)
        this.elements.JobLanguage().select(1)
    }

    //Outlet functions
    VerifyOutletRequiredErrMsg = () => {
        const RequiredText = [
            "Please enter Job Title",
            "Please enter Description",
            "Please select at least one outlet.",
            "Please enter Job Category",
            "Please enter Job Type",
            "Please enter your preferred mode of application."
        ]
        cy.get('.help-block').should("be.visible")
        RequiredText.forEach((errText) => {
            cy.get('.help-block').contains(errText)
        })
    }

    VerifyOutletElements = () => {
        this.elements.JobTitle().should("be.visible")
        this.elements.Salary().should("be.visible")
        this.elements.JobDescription().should("be.visible")

        //Outlet
        this.elements.OutletField().should("be.visible")
        this.elements.OutletField().click()
        this.elements.OutletModal().should("be.visible")
        this.elements.OutletSelectionOne().should("be.visible")
        this.elements.OutletSelectionTwo().should("be.visible")
        this.elements.OutletConfirmButton().should("be.visible")
        this.elements.OutletCloseIcon().click()

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

    FillOutletPostjobForm = (newJobInfo) => {
        const JobInfo = {
            jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
            jobDesc: "This is a automated testing, DO NOT APPLY!",
            applyByEmail: "kimjay.luta@fastco.asia",
            applyByCallSms: "911911978"
        }
        this.elements
            .JobTitle()
            .clear()
            .type(JobInfo.jobTitle)
        this.elements
            .JobDescription()
            .find('.rtf-content[contenteditable="true"]')
            .type(JobInfo.jobDesc, {force: true})

        //Outlet selection
        this.elements.OutletField().click()
        this.elements.OutletSelectionOne().click()
        this.elements.OutletSelectionTwo().click()
        this.elements.OutletConfirmButton().click()

        this.elements.JobCategory().select(5)
        this.elements.JobCategoryTwo().select(10)
        this.elements.JobTypePartTime().click()
        this.elements.JobTypeFullTime().click()
        this.elements
            .ApplyByEmail()
            .clear()
            .type(JobInfo.applyByEmail)
        this.elements
            .ApplyByCallSms()
            .clear()
            .type(JobInfo.applyByCallSms)
    }

    EditletPostjobForm = (newJobInfo) => {
        const JobInfo = {
            jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
            jobDesc: "This is a automated testing, DO NOT APPLY!",
            applyByEmail: "kimjay.luta@fastco.asia",
            applyByCallSms: "911911978"
        }
        this.elements
            .JobTitle()
            .clear()
            .type(JobInfo.jobTitle)
        this.elements
            .JobDescription()
            .find('.rtf-content[contenteditable="true"]')
            .type(JobInfo.jobDesc, {force: true})

        this.elements.JobCategory().select(5)
        this.elements.JobCategoryTwo().select(10)
        this.elements.JobTypePartTime().click()
        this.elements.JobTypeFullTime().click()
        this.elements
            .ApplyByEmail()
            .clear()
            .type(JobInfo.applyByEmail)
        this.elements
            .ApplyByCallSms()
            .clear()
            .type(JobInfo.applyByCallSms)
    }

    // Not Being used atm
    SendJobPostingFeedback = () => {
        // cy.get('#ratingModal').should('be.visible').then((modal) => {
        //     cy.get('#ratingModal > .modal-dialog > .modal-content > .modal-header > .modal-close').click();
        // });
        // cy.get('#ratingModal').should('not.visible');
        // cy.log('Rating modal is not visible, ending the test case');
        cy.wait(3000)
        cy.get('#ratingModal').then(($modal) => {
            if ($modal.is(':visible')) {
              // If the modal is visible, close it
              cy.get('#ratingModal > .modal-dialog > .modal-content > .modal-header > .modal-close').click();
            } else {
              // If the modal is not visible, log a message in the console
              cy.log('The rating modal is not currently visible.');
            }
        });
    }
    
    
}

module.exports = new JobPostPage() 
