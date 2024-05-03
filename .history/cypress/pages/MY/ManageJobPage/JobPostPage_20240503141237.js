class JobPostPage {
	elements = {
		// Elements not related inside of Posting job form
		ManageJobsNavlink: () =>
			cy.get(".container > .row > .col-sm-12 > .nav > :nth-child(2) > a"),
		ManageJobsPostNewJobBtn: () => cy.get(".pull-right > .btn"),

		// EDIT JOB
		EditJobBtn: () => cy.get(".btn-edit"),

		// Copy elements
		CopyJobBtn: () => cy.get(".btn-copy"),

		//Expire elements
		ExpireJobBtn: () => cy.get(".btn-expire"),
		ConfirmExpireJob: () =>
			cy.get(
				"#modal-confirm-expire > .modal-dialog > .modal-content > form > .modal-active-buttons > .modal-active-submit"
			),

		//Job form elements
		JobTitle: () => cy.get("#jobTitleInput"),

		SalaryFlag: () => cy.get("#salflag-dt > .btn"),
		SalaryFlagDropdown: () => cy.get(":nth-child(2) > .dropdown-sal-flag"),
		Salary: () => cy.get("#maxsals"),
		SalaryPeriod: () => cy.get("#jobSalPeriodDp > .btn"),
		SalaryPeriodDropdown: () => cy.get(":nth-child(4) > .dropdown-sal-period"),

		JobDescription: () => cy.get("div.rx-editor-container"),

		Location: () => cy.get("#jobRegion"),
		SubLocation: () => cy.get("#jobCity"),
		WorkingPlace: () => cy.get("#c9jobs-building"),
		WorkingPlaceSelect: () => cy.get("#ui-id-2"),

		JobCategory: () => cy.get("#c9jobs-category"),
		JobCategoryTwo: () => cy.get("#c9jobs-category2"),

		JobTypePartTime: () => cy.get(":nth-child(1) > .checkbox-box"),
		JobTypeFullTime: () => cy.get(":nth-child(2) > .checkbox-box"),
		JobTypeContracts: () => cy.get(":nth-child(3) > .checkbox-box"),

		Timing: () => cy.get("#c9jobs-timingc"),
		FilterApplicants: () => cy.get("#c9jobs-appfilterflag"),

		ApplyByEmail: () => cy.get("#c9jobs-appdirecteml"),
		ApplyByCallSms: () => cy.get("#c9jobs-appdirectmobn"),
		AppyByWhatsapp: () => cy.get("#c9jobs-appwhatsapp"),

		//Job Form new Elements

		//Preferences
		EducLevel: () => cy.get("#c9jobs-edulvlc"),
		JobSkills: () =>
			cy.get(
				":nth-child(2) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control"
			),
		JobLanguage: () =>
			cy.get(
				":nth-child(3) > .col-md-12 > .form-group > .block-grid-xs-1 > :nth-child(1) > .form-control"
			),

		//Cancel & Submit buttons
		CancelBtn: () => cy.get("#btnCancelJobPost"),
		ConfirmCancelBtn: () => cy.get(".iziToast-buttons > .btn-danger"),
		PostNewJobBtn: () => cy.get("#btnSubmitJobPost"),
		ConfirmSubmitJob: () => cy.get("#confirm-btn"),
		BottomSaveAsDraftBtn: () => cy.get(":nth-child(3) > .btn"),

		//Error message element
		NewJobFormRequiredErrMsg: () => cy.get(".help-block"),

		//Package
		PackageType: (packageType) =>
			cy.get(
				`:nth-child(${packageType}) > .col-xs-2 > .control > .control__indicator`
			),

		//Success message
		SuccessMsg: () => cy.get(".iziToast-body"),

		//Rating modal
		RatingModal: () => cy.get("#ratingModal"),

		//Duplicate Notification elements
		DuplicateNotification: () => cy.get("#duplicate-detection"),
		DuplicateMsg: () => cy.get(".panel-body > :nth-child(1) > .col-xs-12"),

		//Outlet elements
		OutletField: () => cy.get("#linkSelectOutlet"),
		OutletModal: () => cy.get("#outletsModal"),
		OutletSelectionOne: () =>
			cy.get(
				":nth-child(2) > .panel-body > .block-grid-xs-1 > .block-grid-item > .control > .control__indicator"
			),
		OutletSelectionTwo: () =>
			cy.get(
				":nth-child(3) > .panel-body > .block-grid-xs-1 > .block-grid-item > .control > .control__indicator"
			),
		OutletConfirmButton: () => cy.get("#btnSelectOutlet"),
		OutletCloseIcon: () => cy.get('[aria-hidden="true"] > .fa'),
	};

	GoToJobListing = () => {
		this.elements.ManageJobsNavlink().click();
	};

	GoToPostNewJobForm = () => {
		// this.elements.ManageJobsNavlink().click()
		this.elements.ManageJobsPostNewJobBtn().click();
	};

	ClickCancelButton = () => {
		this.elements.CancelBtn().click();
		this.elements.ConfirmCancelBtn().click();
	};

	ClickPostNewJobBtn = () => {
		this.elements.PostNewJobBtn().click();
	};

	ConfirmSubmit = () => {
		this.elements.ConfirmSubmitJob().click();
	};

	VerifySuccessMsg = () => {
		// cy.wait(7000)
		this.elements.SuccessMsg().should("be.visible");
	};

	ExpireTheJob = () => {
		cy.wait(5000);
		this.elements.ExpireJobBtn().click();
		this.elements.ConfirmExpireJob().click();
	};

	SelectPackage = (packageType) => {
		this.elements.PackageType(packageType).click();
	};

	EditTheJob = () => {
		// cy.wait(5000)
		this.elements.EditJobBtn().click();
	};

	CopyTheJob = () => {
		this.elements.CopyJobBtn().should("be.visible").click();
	};

	VerifyDuplicateNotification = () => {
		const DuplicateMsg = [
			"Oops, this job looks like a copy of an existing active job!",
			"If you would like to proceed, we suggest modifying at least one of these fields to continue:",
			"Job title",
			"Description",
			"Location/Sub-location",
			"Job Type",
		];
		this.elements.DuplicateNotification().should("be.visible");
		this.elements.DuplicateMsg().should("be.visible");
		DuplicateMsg.forEach((errText) => {
			this.elements.DuplicateMsg().contains(errText);
		});
	};

	VerifyRequiredErrMsg = () => {
		const RequiredText = [
			"Please enter Job Title",
			"Please enter Description",
			"Please enter Location",
			"Please enter Sub Location",
			"Please enter Job Category",
			"Please enter Job Type",
			"Please enter your preferred mode of application.",
		];
		this.elements.NewJobFormRequiredErrMsg().should("be.visible");
		RequiredText.forEach((errText) => {
			this.elements.NewJobFormRequiredErrMsg().contains(errText);
		});
	};

	FillPostNewJobForm = (newJobInfo) => {
		const JobInfo = {
			jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
			jobDesc: "This is a automated testing, DO NOT APPLY!",
			applyByEmail: "kimjay.luta@fastco.asia",
			applyByCallSms: "911911978",
		};
		this.elements.JobTitle().clear().type(JobInfo.jobTitle);
		this.elements
			.JobDescription()
			.find('.rtf-content[contenteditable="true"]')
			.type(JobInfo.jobDesc, { force: true });

		// this.elements.Location().select(8);
		// this.elements.SubLocation().select(10);
		cy.get(".actions > .fj-btn").click();
		cy.wait(500);
		cy.get("#location-search-input").type("Citta");
		cy.get(".location-item").eq(0).click({ force: true });
		cy.contains("Add work address").click();
		this.elements.JobCategory().select(5);
		this.elements.JobCategoryTwo().select(10);
		this.elements.JobTypePartTime().click();
		this.elements.JobTypeFullTime().click();
		this.elements.ApplyByEmail().clear().type(JobInfo.applyByEmail);
		this.elements.ApplyByCallSms().clear().type(JobInfo.applyByCallSms);
	};

	FillOptionalFields = () => {
		this.elements.SalaryFlag().click();
		this.elements.SalaryFlagDropdown().click();
		this.elements.Salary().type("100");
		this.elements.SalaryPeriod().click();
		this.elements.SalaryPeriodDropdown().click();

		this.elements.WorkingPlace().type("Test");
		this.elements.WorkingPlaceSelect().click();
		this.elements.Timing().select(1);

		this.elements.EducLevel().select(5);
		this.elements.JobSkills().select(1);
		this.elements.JobLanguage().select(1);
	};

	//Outlet functions
	VerifyOutletRequiredErrMsg = () => {
		const RequiredText = [
			"Please enter Job Title",
			"Please enter Description",
			// "Please select at least one outlet.",
			"Joboutlets cannot be blank",
			"Please enter Job Category",
			"Please enter Job Type",
			"Please enter your preferred mode of application.",
		];
		cy.get(".help-block").should("be.visible");
		RequiredText.forEach((errText) => {
			cy.get(".help-block").contains(errText);
		});
	};

	FillOutletPostjobForm = (newJobInfo) => {
		const JobInfo = {
			jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
			jobDesc: "This is a automated testing, DO NOT APPLY!",
			applyByEmail: "kimjay.luta@fastco.asia",
			applyByCallSms: "911911978",
		};
		this.elements.JobTitle().clear().type(JobInfo.jobTitle);
		this.elements
			.JobDescription()
			.find('.rtf-content[contenteditable="true"]')
			.type(JobInfo.jobDesc, { force: true });

		//Outlet selection
		this.elements.OutletField().click();
		this.elements.OutletSelectionOne().click();
		this.elements.OutletSelectionTwo().click();
		this.elements.OutletConfirmButton().click();

		this.elements.JobCategory().select(5);
		this.elements.JobCategoryTwo().select(10);
		this.elements.JobTypePartTime().click();
		this.elements.JobTypeFullTime().click();
		this.elements.ApplyByEmail().clear().type(JobInfo.applyByEmail);
		this.elements.ApplyByCallSms().clear().type(JobInfo.applyByCallSms);
	};

	EditletPostjobForm = (newJobInfo) => {
		const JobInfo = {
			jobTitle: newJobInfo.jobTitle || "AUTOMATED JOB POST (DO NOT APPLY!!!)",
			jobDesc: "This is a automated testing, DO NOT APPLY!",
			applyByEmail: "kimjay.luta@fastco.asia",
			applyByCallSms: "911911978",
		};
		this.elements.JobTitle().clear().type(JobInfo.jobTitle);
		this.elements
			.JobDescription()
			.find('.rtf-content[contenteditable="true"]')
			.type(JobInfo.jobDesc, { force: true });

		this.elements.JobCategory().select(5);
		this.elements.JobCategoryTwo().select(10);
		this.elements.JobTypePartTime().click();
		this.elements.JobTypeFullTime().click();
		this.elements.ApplyByEmail().clear().type(JobInfo.applyByEmail);
		this.elements.ApplyByCallSms().clear().type(JobInfo.applyByCallSms);
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
				cy
					.get(
						"#ratingSuccessModal > .modal-dialog > .modal-content > .modal-header > .modal-close"
					)
					.click();
			} else {
				cy.log("Feedback Rating modal is not visible");
			}
		});
	};

	// Verify if there's a posted job and expire it
	VerifyPostedJobAd = () => {
		this.GoToJobListing();
		cy.wait(200);

		cy.get("#jobsList").then(($jobAdElement) => {
			const findJobCardElement = $jobAdElement.find(".panel-body");

			if (findJobCardElement.length > 0) {
				cy.log("Have a posted job!");
				findJobCardElement.each(($el) => {
					this.elements.ExpireJobBtn().eq($el).click();
					this.elements.ConfirmExpireJob().click();
				});
			} else {
				cy.log("No Posted job!");
			}
		});
	};
}

module.exports = new JobPostPage();
