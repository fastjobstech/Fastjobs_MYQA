class SGJobPostPage {
	elements = {
		//Elements not related to Job posting form
		EnglishJobsNavlink: () => cy.get(".col-sm-12 > .nav > :nth-child(2) > a",{timeout: 40000}),
		PostNewJobBtn: () => cy.get("[data-event='job_posting_initiated']",{timeout: 40000}),
		JoblistingEl: () => cy.get("div.job-ad-box",{timeout: 40000}),
		JobListingTitle: () => cy.get("h1.page-header-title",{timeout: 40000}),

		// Post new job form elements
		UpPostJobBtn: () => cy.get("#save-job"),
		UpSaveDraftBtn: () => cy.get(".job-actions > .save-draft"),

		// Job Details
		JobTitle: () => cy.get("#jobTitleInput input",{timeout:40000}).first(),
		JobClassification: () => cy.get('#other-job-role-input div div input'),
		SelectAutoSuggestedClassification:() => cy.get('div#job-role-option-1'),
		
		SalaryDropdownFirst: () => cy.get("#salflag-dt > .btn"),
		SalaryField: () => cy.get("#maxsals"),
		SalaryType: () => cy.get("#salperiod-dt > .btn"),
		JobDescription: () => cy.get("div.rx-editor-container"),

		NearestMRT: () => cy.get("#c9jobs-regionc"),
		WorkingPlace: () => cy.get("#c9jobs-building"),

		JobCategoryOne: () => cy.get("#c9jobs-category"),
		JobCategoryTwo: () => cy.get("#c9jobs-category2"),

		Timing: () => cy.get("#c9jobs-timingc"),

		PartTimeJobType: () => cy.get("li fast-checkbox#job-type-1").shadow().find("input[name='C9jobs[jobtypes][0]']"),
		FullTimeJobType: () => cy.get("li fast-checkbox#job-type-2").shadow().find("input[name='C9jobs[jobtypes][1]']"),
		ContractJobType: () => cy.get("#job-type-3").shadow().find("input[name='C9jobs[jobtypes][2]']"),

		SetOutletsSettingBtn: () => cy.get(".col-xs-12 > :nth-child(3) > .btn"),
		ApplyByEmail: () => cy.get("#c9jobs-appdirecteml"),
		ApplyByCall: () => cy.get("#c9jobs-appdirectmobn"),
		ApplyByWhatsapp: () => cy.get("#c9jobs-appwhatsapp"),
		ApplyBySMS: () => cy.get("#mobile-input"),

		//Job Form new Elements
		AddWorkLocation: () => cy.get(".actions > .fj-btn"),
		SearchLocation: () => cy.get("#location-search-input"),
		LocationItem: () => cy.get(".location-item"),
		AddWorkAddressBtn: () => cy.contains("Add work address"),

		// Preference fields Optional
		EducationLevel: () => cy.get("#c9jobs-edulvlc"),
		JobSkillsOne: () =>
			cy.get(":nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control"),
		JobSkillsTwo: () =>
			cy.get(":nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(2) > .form-control"),
		JobSkillsThree: () =>
			cy.get(":nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(3) > .form-control"),
		JobLanguageOne: () =>
			cy.get(":nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control"),
		JobLanguageTwo: () =>
			cy.get(":nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(2) > .form-control"),
		JobLanguageThree: () =>
			cy.get(":nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(3) > .form-control"),
		ApplicationFilter: () => cy.get("#c9jobs-appfilterflag"),
		ScheduledJobPost: () => cy.get("#c9jobs-scheduledttme-datetime > #c9jobs-scheduledttme"),

		// Packages Default
		PackageSelection: () => cy.get(":nth-child(22) > .col-xs-2 > center > label"),

		CancelBtn: () => cy.get("#cancel-job"),
		JobPostingFormPostNewJobBtn: () => cy.get("#save-job"),
		SaveDraftBtn: () => cy.get('div[data-state="normal"] > .btn'),

		ConfirmSubmitJob: () => cy.get("#confirm-btn",{timeout: 40000}),

		//Error message elements
		NewJobFormRequiredErrMsg: () => cy.get(".help-block"),

		//Duplicate Error message
		DuplicateNotification: () => cy.get(".panel-body"),
		DuplicateMsg: () => cy.get(".panel-body > :nth-child(1) > .col-xs-12"),

		//More actions
		MoreActionsBtn: () => cy.get('[data-cy="More actions"]').first(),


		//Expire job elements
		ExpireJobBtn: () => cy.get('[data-cy="Expire job post"]').first(),
		ConfirmExpireJob: () =>
			cy.get(
				"[data-event='expire_job_confirmed']"
			),

		//Edit Job elements
		EditJobBtn: () => cy.get('[data-cy="Edit job"]',{timeout: 30000}),

		//Copy Job
		CopyJobBtn: () => cy.get("[data-cy='Copy job post']"),

		//Outlet elements
		OutletOne: () => cy.get(".col-md-12 > .block-grid-xs-1 > :nth-child(1) > :nth-child(1)"),
		OutletTwo: () => cy.get(".col-md-12 > .block-grid-xs-1 > :nth-child(2) > :nth-child(1)"),
		OutletThree: () => cy.get(".col-md-12 > .block-grid-xs-1 > :nth-child(3) > :nth-child(1)"),

		//Parking lot elements
		UsageDetails: () => cy.get(".col-sm-12 > :nth-child(21)").contains("Usage details"),
		UsageTitle: () => cy.get(".usage-title"),
		UsageError: () => cy.get(".usage-error"),
		UsageRadioButton: () => cy.get(".usage-radio"),

		//RA Elements
		RAAgencyInfoTitle: () => cy.get("h3"),
		RAInfoLines: () => cy.get(".edit-job-ea-info-liner"),
		EALicenseNo: () => cy.get("#job-ea-company"),
		EAPersonnelNo: () => cy.get("#job-ea-personnel"),
		ADOwner: () => cy.get("#job-ea-list"),
		RACheckbox: () => cy.get(":nth-child(6) > .control > .control__indicator"),
		RAProceedButton: () => cy.get("#continue-edit-ea-btn"),

		//Search Elements
		searchBoxForJobName: () => cy.get("#keyword",{timeout: 40000}),

		//Success message
		SuccessMsg: () => cy.get("div.iziToast-message",{timeout: 30000}),
	};

	GoToJobListing = () => {
		this.elements.EnglishJobsNavlink().should("be.visible").click();
	};

	GotoPostNewJobForm = () => {
		// this.elements.EnglishJobsNavlink().click()
		this.elements.PostNewJobBtn().should("be.visible").click();
	};

	VerifyJobFormElements = (AccountType) => {
		const generalElementsToCheck = [
			this.elements.UpPostJobBtn,
			this.elements.UpSaveDraftBtn,
			this.elements.JobTitle,
			this.elements.SalaryDropdownFirst,
			this.elements.SalaryType,
			this.elements.JobDescription,
			this.elements.JobCategoryOne,
			this.elements.JobCategoryTwo,
			this.elements.PartTimeJobType,
			this.elements.FullTimeJobType,
			this.elements.ContractJobType,
			this.elements.ApplyByEmail,
			this.elements.ApplyByCall,
			this.elements.ApplyByWhatsapp,
			this.elements.ApplyBySMS,
			this.elements.CancelBtn,
			this.elements.JobPostingFormPostNewJobBtn,
			this.elements.SaveDraftBtn,
		];

		const OutletElementsToCheck = [
			this.elements.OutletOne,
			this.elements.OutletTwo,
			this.elements.OutletThree,
			this.elements.PackageSelection,
		];

		const ParkingLotElementsToCheck = [
			this.elements.NearestMRT,
			this.elements.WorkingPlace,
			this.elements.SetOutletsSettingBtn,
			this.elements.UsageDetails,
		];

		//Verify General elements for all account types
		generalElementsToCheck.forEach((element) => {
			element().should("be.visible");
		});

		//Verify outlet elements
		if (AccountType == "outlet") {
			OutletElementsToCheck.forEach((element) => {
				element().should("be.visible");
			});
			cy.log("Outlet section is been verified!");
		}

		//Verify Parking lot elements
		if (AccountType == "parkingLot") {
			ParkingLotElementsToCheck.forEach((element) => {
				element().should("be.visible");
			});
			cy.log("Parking lot section is been verified!");
		}

		if (AccountType == "recruitmentAgency") {
			this.elements.RAAgencyInfoTitle().contains("Recruitment Agency Info").should("be.visible");
			this.elements.EALicenseNo().should("be.visible");
			this.elements.EAPersonnelNo().should("be.visible");
			this.elements.ADOwner().should("be.visible");
			this.elements.RACheckbox().should("be.visible");
		}
	};

	VerifySuccessMsg = () => {
		
		this.elements.SuccessMsg().should("be.visible");
	};

	FillPostNewJobForm = (jobData, AccountType, isUpdated) => {

		if (isUpdated == true) {
			this.elements.JobTitle().clear({force:true}).type(jobData.jobTitle+" "+"Updated",{force:true});	
			this.elements.JobDescription().find('.rtf-content[contenteditable="true"]').clear().type('Updated'+" "+jobData.jobDesc, { force: true });
		}
		else {
			this.elements.JobTitle().clear({force:true}).type(jobData.jobTitle,{force:true});
			this.elements.JobDescription().find('.rtf-content[contenteditable="true"]').type(jobData.jobDesc, { force: true });
			//this.elements.JobClassification().clear({force:true}).type(jobData.jobTitle);

			this.elements.JobCategoryOne().click().then(()=>{
				cy.contains('Call Centres / Telemarketing').click();
			})
			this.elements.JobCategoryTwo().click().then(() =>{
				cy.contains('Education / Training').scrollIntoView().click({force:true});
			})
			this.elements.JobClassification().scrollIntoView().click({force:true}).type(jobData.jobTitle,{force:true});
			this.elements.PartTimeJobType().click({force:true});
			this.elements.FullTimeJobType().click({force:true});
			this.elements.ApplyByEmail().clear().type(jobData.applyByEmail);
			this.elements.ApplyBySMS().clear().type(jobData.applyByCallSms);
			cy.get('[name="Sms"]').shadow().find('input').click({force:true});
			cy.wait(4000)
		}

		if (AccountType == "outlet" && isUpdated == false) {

			// New Job posting - Location
			this.elements.AddWorkLocation().click();
			cy.wait(500);
			this.elements.LocationItem().eq(0).click();
			cy.wait(200)
			cy.contains("Confirm selection").click();
		}

		if (AccountType != "outlet" && isUpdated == false) {
			// this.elements.NearestMRT().select(8);

			// New Job posting - Location
			this.elements.AddWorkLocation().click();
			cy.wait(500);
			this.elements.SearchLocation().type("Testing");
			cy.wait(200);
			this.elements.LocationItem().eq(0).click();
			cy.wait(200);
			this.elements.AddWorkAddressBtn().should('be.visible').should('not.be.disabled').click();
		}
		
		// cy.log("Verify Posted job exists")
		// if(isUpdated == false){
		// 	this.elements.JoblistingEl().eq(0).should("be.visible").and('contain', jobData.jobTitle);
		// 	}else{
		// 		this.elements.JoblistingEl().eq(0).should("be.visible").and('contain', jobData.editedJobTitle);
		// 	}
		//This logic can be used when copying a job
		// if (isUpdated == true) {
		// 	this.elements.PartTimeJobType().click();
		// 	this.elements.FullTimeJobType().click();
		// }
	};

	ClickCancelButton = () => {
		this.elements.CancelBtn().click();
	};

	ClickPostNewJobBtn = () => {
		this.elements.UpPostJobBtn().scrollIntoView().should("be.visible").click();
	};

	ConfirmSubmit = () => {
		this.elements.ConfirmSubmitJob().click();
	};

	VerifyJobListingPage = () => {
		this.elements.JobListingTitle().contains("Manage English Jobs").should("be.visible");
	};

	CopyTheJob = () => {
		this.elements.MoreActionsBtn().first().should("be.visible").click({force:true});
		cy.wait(500)
		this.elements.CopyJobBtn().invoke('show').click({force:true});
	};

	EditTheJob = () => {
		this.elements.EditJobBtn().should("be.visible").click();
	};

	VerifyLoaderTextIsDisplayed = () => {
		cy.get(".loader-text").should("be.visible");
	};

	CloseToolTips = () => {
		// Tour - close the tour
		cy.get("#tg-dialog-close-btn").should("be.visible");
		cy.get("#tg-dialog-close-btn").click();
	};

	VerifyRequiredErrMsg = (AccountType) => {
		const RequiredText = [
			"Please enter Job Title",
			"Please enter Description",
			"Please enter Job Category",
			"Please enter Job Type",
			"Please enter your preferred mode of application.",
		];

		//Verify the error message for all account types
		this.elements.NewJobFormRequiredErrMsg().should("be.visible");
		RequiredText.forEach((errText) => {
			this.elements.NewJobFormRequiredErrMsg().contains(errText);
		});

		//Verify the error message specifically for account type
		if (AccountType == "outlet") {
			const OutletRequiredText = "Please choose at least one outlet";
			this.elements.NewJobFormRequiredErrMsg().contains(OutletRequiredText);
			cy.log("Verified outlet error messages");
		}

		if (AccountType == "directEmployer" || AccountType == "parkingLot") {
			const DeRequiredText = "Please enter Nearest MRT";
			this.elements.NewJobFormRequiredErrMsg().contains(DeRequiredText);
			cy.log("Verified DE and ParkingLot error messages");
		}
	};

	VerifyDuplicateNotification = () => {
		const DuplicateMsg = [
			"Oops, this job looks like a copy of an existing active job!",
			"If you would like to proceed, we suggest modifying at least one of these fields to continue:",
			"Job Title",
			"Description",
			"Job Type",
		];
		this.elements.DuplicateNotification().should("be.visible");
		this.elements.DuplicateMsg().should("be.visible");
		DuplicateMsg.forEach((errText) => {
			this.elements.DuplicateMsg().contains(errText);
		});
	};

	//Recruitment Agency
	RAClickProceedButton = () => {
		this.elements.RAProceedButton().click();
	};

	RAClickCheckbox = () => {
		this.elements.RACheckbox().click();
	};

	//Parking Lot
	VerifyInsufficientSlotErrorMessage = () => {
		const ErrorTitle = "Insufficient slots - select a job post to expire*";
		// const ErrorMessage = "Please select one job post to replace.";

		this.elements.UsageTitle().contains(ErrorTitle).should("be.visible");
		// this.elements.UsageError().contains(ErrorMessage).should("be.visible");
	};

	SelectReplaceJob = () => {
		this.elements.UsageRadioButton().should("be.visible");
		this.elements.UsageRadioButton().click();
	};

	// Verify if Feedback modal is displayed
	VerifyJobPostingFeedbackModal = () => {
		cy.get("body").then(($el) => {
			cy.wait(2000);
			const feedbackModalElement = $el.find("#ratingModal");

			if (feedbackModalElement.length > 0 && feedbackModalElement.is(":visible")) {
				cy.log("Feedback Rating modal is visible");
				//Submits feedback or close the modal?
				cy.get("#rating5").click();
				cy.get(".rating-comments > textarea").type("This is automated Testing!");
				cy.get(".rating-submit").click();

				//Success modal
				cy.get("#ratingSuccessModal > .modal-dialog > .modal-content > .modal-header > .modal-close").click();
			} else {
				cy.log("Feedback Rating modal is not visible");
			}
		});
	};

	searchForJob = (jobData) => {
		this.elements.searchBoxForJobName().should('exist').and('be.visible')
		.clear()
		.type(jobData.jobTitle + '{enter}');
		cy.wait(2000)
	}

	expireJobPost = () =>{
		this.elements.MoreActionsBtn().should("be.visible").click({force:true});
		cy.wait(500)
		this.elements.ExpireJobBtn().invoke('show').click({force:true});
		cy.wait(100);
		this.elements.ConfirmExpireJob().click();
	}

	verifyExpiredJobNotShownInList = () =>{
		cy.get('div.job-list-empty').should('exist').and('be.visible')
	}
	// // Check if there's a posted job and expire it
	// VerifyPostedJobAd = () => {
	// 	this.GoToJobListing();
	// 	cy.wait(1000);

	// 	this.elements
	// 		.JoblistingEl()
	// 		.should("be.visible")
	// 		.then(($jobAdElement) => {
	// 			const findJobCardElement = $jobAdElement.find(".panel-body");

	// 			if (findJobCardElement.length > 0) {
	// 				cy.log("Have a posted job!");
	// 				findJobCardElement.each(($el) => {
	// 					this.elements.MoreActionsBtn().eq($el).click({force:true});
	// 					this.elements.ExpireJobBtn().eq($el).click({force:true});
	// 					cy.wait(100);
	// 					this.elements.ConfirmExpireJob().click();
	// 				});
	// 			} else {
	// 				cy.log("No Posted job!");
	// 			}
	// 		});
	// };
}

module.exports = new SGJobPostPage();
