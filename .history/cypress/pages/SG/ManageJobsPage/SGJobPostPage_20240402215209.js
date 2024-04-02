class SGJobPostPage {
	elements = {
		//Elements not related to Job posting form
		EnglishJobsNavlink: () => cy.get(".col-sm-12 > .nav > :nth-child(2) > a"),
		PostNewJobBtn: () => cy.get(".pull-right > .btn"),
		JoblistingEl: () => cy.get("#jobsList"),
		JobListingTitle: () => cy.get(".page-title > .pull-left", { timeout: 10000 }),

		// Post new job form elements
		UpPostJobBtn: () => cy.get("#update-job"),
		UpSaveDraftBtn: () => cy.get(".job-actions > .save-draft"),

		// Job Details
		JobTitle: () => cy.get("#jobTitleInput"),
		SalaryDropdownFirst: () => cy.get("#salflag-dt > .btn"),
		SalaryField: () => cy.get("#maxsals"),
		SalaryType: () => cy.get("#salperiod-dt > .btn"),
		JobDescription: () => cy.get("div.rx-editor-container"),

		NearestMRT: () => cy.get("#c9jobs-regionc"),
		WorkingPlace: () => cy.get("#c9jobs-building"),

		JobCategoryOne: () => cy.get("#c9jobs-category"),
		JobCategoryTwo: () => cy.get("#c9jobs-category2"),

		Timing: () => cy.get("#c9jobs-timingc"),

		PartTimeJobType: () => cy.get(":nth-child(1) > .checkbox > label"),
		FullTimeJobType: () => cy.get(":nth-child(2) > .checkbox > label"),
		ContractJobType: () => cy.get(":nth-child(3) > .checkbox > label"),

		SetOutletsSettingBtn: () => cy.get(".col-xs-12 > :nth-child(3) > .btn"),
		ApplyByEmail: () => cy.get("#c9jobs-appdirecteml"),
		ApplyByCall: () => cy.get("#c9jobs-appdirectmobn"),
		ApplyByWhatsapp: () => cy.get("#c9jobs-appwhatsapp"),
		ApplyBySMS: () => cy.get("#txtAppModeSMSNo"),

		// Preference fields Optional
		EducationLevel: () => cy.get("#c9jobs-edulvlc"),
		JobSkillsOne: () => cy.get(":nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control"),
		JobSkillsTwo: () => cy.get(":nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(2) > .form-control"),
		JobSkillsThree: () => cy.get(":nth-child(16) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(3) > .form-control"),
		JobLanguageOne: () => cy.get(":nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control"),
		JobLanguageTwo: () => cy.get(":nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(2) > .form-control"),
		JobLanguageThree: () => cy.get(":nth-child(17) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(3) > .form-control"),
		ApplicationFilter: () => cy.get("#c9jobs-appfilterflag"),
		ScheduledJobPost: () => cy.get("#c9jobs-scheduledttme-datetime > #c9jobs-scheduledttme"),

		// Packages Default
		PackageSelection: () => cy.get(":nth-child(22) > .col-xs-2 > center > label"),

		CancelBtn: () => cy.get("#cancel-job"),
		JobPostingFormPostNewJobBtn: () => cy.get("#save-job"),
		SaveDraftBtn: () => cy.get('div[data-state="normal"] > .btn'),

		ConfirmSubmitJob: () => cy.get("#confirm-btn"),

		//Error message elements
		NewJobFormRequiredErrMsg: () => cy.get(".help-block"),

		//Duplicate Error message
		DuplicateNotification: () => cy.get(".panel-body"),
		DuplicateMsg: () => cy.get(".panel-body > :nth-child(1) > .col-xs-12"),

		//Expire job elements
		ExpireJobBtn: () => cy.get(".btn-expire"),
		ConfirmExpireJob: () => cy.get( "#modal-confirm-expire > .modal-dialog > .modal-content > form > .modal-active-buttons > .modal-active-submit"),

		//Edit Job elements
		EditJobBtn: () => cy.get(".btn-edit", { timeout: 10000 }),

		//Copy Job
		CopyJobBtn: () => cy.get(".btn-copy", { timeout: 10000 }),

		//Outlet elements
		OutletOne: () =>
			cy.get(".col-md-12 > .block-grid-xs-1 > :nth-child(1) > :nth-child(1)"),
		OutletTwo: () =>
			cy.get(".col-md-12 > .block-grid-xs-1 > :nth-child(2) > :nth-child(1)"),
		OutletThree: () =>
			cy.get(".col-md-12 > .block-grid-xs-1 > :nth-child(3) > :nth-child(1)"),

		//Parking lot elements
		UsageDetails: () =>
			cy.get(".col-sm-12 > :nth-child(21)").contains("Usage details"),
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
	};

	GoToJobListing = () => {
		this.elements.EnglishJobsNavlink().click();
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
			this.elements
				.RAAgencyInfoTitle()
				.contains("Recruitment Agency Info")
				.should("be.visible");
			this.elements.EALicenseNo().should("be.visible");
			this.elements.EAPersonnelNo().should("be.visible");
			this.elements.ADOwner().should("be.visible");
			this.elements.RACheckbox().should("be.visible");
		}
	};

	FillPostNewJobForm = (newJobInfo, AccountType, isUpdated) => {
		const JobInfo = {
			jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
			jobDesc: "This is a automated testing, DO NOT APPLY!",
			applyByEmail: "kimjay.luta@fastco.asia",
			applyByCallSms: "91191197",
		};
		this.elements.JobTitle().clear().type(JobInfo.jobTitle);
		this.elements
			.JobDescription()
			.find('.rtf-content[contenteditable="true"]')
			.type(JobInfo.jobDesc, { force: true });

		this.elements.JobCategoryOne().select(5);
		this.elements.JobCategoryTwo().select(10);
		this.elements.PartTimeJobType().click();
		this.elements.FullTimeJobType().click();
		this.elements.ApplyByEmail().clear().type(JobInfo.applyByEmail);
		this.elements.ApplyBySMS().clear().type(JobInfo.applyByCallSms);

		if (AccountType == "outlet") {
			this.elements.OutletOne().click();
			this.elements.OutletTwo().click();
		}

		if (
			AccountType == "directEmployer" ||
			AccountType == "parkingLot" ||
			AccountType == "recruitmentAgency"
		) {
			this.elements.NearestMRT().select(8);
		}

		//This logic can be used when copying a job
		if (isUpdated == true) {
			this.elements.PartTimeJobType().click();
			this.elements.FullTimeJobType().click();
		}
	};

	ClickCancelButton = () => {
		this.elements.CancelBtn().click();
	};

	ClickPostNewJobBtn = () => {
		this.elements.UpPostJobBtn().click();
	};

	ConfirmSubmit = () => {
		this.elements.ConfirmSubmitJob().click();
	};

	VerifyJobListingPage = () => {
		this.elements
			.JobListingTitle()
			.contains("Manage English Jobs")
			.should("be.visible");
	};

	ExpireTheJob = () => {
		cy.wait(5000);
		this.elements.ExpireJobBtn().click();
		this.elements.ConfirmExpireJob().click();
	};

	CopyTheJob = () => {
		this.elements.CopyJobBtn().should("be.visible").click();
	};

	EditTheJob = () => {
		this.elements.EditJobBtn().click();
	};

	VerifyLoaderTextIsDisplayed = () => {
		cy.get(".loader-text").should("be.visible");
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
			"Nearest MRT",
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
		const ErrorMessage = "Please select one job post to replace.";

		this.elements.UsageTitle().contains(ErrorTitle).should("be.visible");
		this.elements.UsageError().contains(ErrorMessage).should("be.visible");
	};

	SelectReplaceJob = () => {
		this.elements.UsageRadioButton().click();
	};

	// Verify if Feedback modal is displayed
	VerifyJobPostingFeedbackModal = () => {
		cy.get("body").then(($el) => {
			cy.wait(200);
			const feedbackModalElement = $el.find("#ratingModal");

			if (feedbackModalElement.length > 0 && feedbackModalElement.is(":visible")) {
				cy.log("Feedback Rating modal is visible");
				//Submits feedback or close the modal?
				cy.get("#rating5").click();
				cy.get(".rating-comments > textarea").type("This is automated Testing!");
				cy.get(".rating-submit").click();

				//Success modal
				cy.get("#ratingSuccessModal > .modal-dialog > .modal-content > .modal-header > .modal-close")
					.click();
			} else {
				cy.log("Feedback Rating modal is not visible");
			}
		});
	};

	// Check if there's a posted job and expire it
	VerifyPostedJobAd = () => {
		this.GoToJobListing();
		cy.wait(500);

		this.elements.JoblistingEl().then(($jobAdElement) => {
			const findJobCardElement = $jobAdElement.find(".panel-body");

			if (findJobCardElement.length > 0) {
				cy.log("Have a posted job!");
				findJobCardElement.each(($el) => {
					this.elements.ExpireJobBtn().eq($el).click();
					cy.wait(100);
					this.elements.ConfirmExpireJob().click();
				});
			} else {
				cy.log("No Posted job!");
			}
		});
	};
}

module.exports = new SGJobPostPage();
