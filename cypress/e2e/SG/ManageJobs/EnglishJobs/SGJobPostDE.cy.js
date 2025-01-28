const Chance = require('chance'); 
const chance = new Chance();
import SGJobPostPage from "../../../../pages/SG/ManageJobsPage/SGJobPostPage";

let jobData;

describe("SG Job Posting", () => {
	const AccountType = "directEmployer";
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	before(() => {
        // Generate random data and assign it to jobData
        jobData = {
            jobTitle: chance.profession(),
            jobDesc: chance.sentence({ words: 12 }) + " " + 'Updated',
            applyByEmail: chance.email(),
            applyByCallSms: '85556278',
            editedJobTitle: chance.profession() + " " + 'Updated',
        };
    });

	// const jobData = {
    //     jobTitle: chance.profession(),
    //     jobDesc: chance.sentence({ words: 12 })+" "+'Updated',
    //     applyByEmail: chance.email(),
    //     applyByCallSms: '85556278',
    //     editedJobTitle: chance.profession()+" "+'Updated',
    // };

	// before(() => {
    //     // Generate random data and assign it to global variables
    //     jobTitle = chance.profession();
    //     jobDesc = chance.sentence({ words: 12 });
    //     applyByEmail = chance.email();
    //     applyByCallSms = '911911978';
    //     editedJobTitle = 'Updated ' + jobTitle;
    // });

	beforeEach(() => {
		const employerUrlSG = Cypress.env("employerSG");
		cy.checkWebsiteAvailability(employerUrlSG);
		cy.pageVisit(employerUrlSG);
		cy.employerLogin(Cypress.env("SG_DE_Username"), Cypress.env("SG_DE_Password"));
		SGJobPostPage.VerifyJobPostingFeedbackModal();

	});

	//afterEach(() => {
	// 	SGJobPostPage.VerifyJobPostingFeedbackModal();
	// 	SGJobPostPage.VerifyPostedJobAd();
	// });

	it("Verify able to Post a new job and edit the job details", () => {
		// const jobInfo = {
		// 	jobTitle: "This is the Updated Title (Automated Script Do not Apply!!!)",
		// };

		SGJobPostPage.GotoPostNewJobForm();
		SGJobPostPage.FillPostNewJobForm(jobData , AccountType, false);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.ConfirmSubmit();
		//SGJobPostPage.VerifySuccessMsg();
		SGJobPostPage.VerifyJobPostingFeedbackModal(); 

		// Edit the Job
		SGJobPostPage.searchForJob(jobData);
		SGJobPostPage.EditTheJob();
		SGJobPostPage.FillPostNewJobForm(jobData, AccountType, true);
		SGJobPostPage.ClickPostNewJobBtn();
		SGJobPostPage.GoToJobListing();
		//SGJobPostPage.VerifySuccessMsg();
		SGJobPostPage.VerifyJobListingPage();
	});

	it("Verify error notification appears when submitted a job that was already posted.", () => {
		// SGJobPostPage.GotoPostNewJobForm();
		// SGJobPostPage.FillPostNewJobForm("", AccountType, false);
		// SGJobPostPage.ClickPostNewJobBtn();
		// SGJobPostPage.ConfirmSubmit();
		// SGJobPostPage.VerifyJobPostingFeedbackModal();

		//Navigate to Job listing
		SGJobPostPage.GoToJobListing();

		//Search for the job
		SGJobPostPage.searchForJob(jobData);

		//Copy the same job
		SGJobPostPage.CopyTheJob();
		SGJobPostPage.ClickPostNewJobBtn();

		//Duplicate Job Error
		SGJobPostPage.VerifyDuplicateNotification();
		SGJobPostPage.ClickCancelButton();
		//SGJobPostPage.VerifyJobListingPage();
	});

	it("Expire the Job Post.",() =>{
		//Navigate to Job listing
		SGJobPostPage.GoToJobListing();

		//Search for the job
		SGJobPostPage.searchForJob(jobData);

		//Expire the same job
		SGJobPostPage.expireJobPost()
		//SGJobPostPage.VerifySuccessMsg();	
		SGJobPostPage.searchForJob(jobData);
		SGJobPostPage.verifyExpiredJobNotShownInList();
	})
});
