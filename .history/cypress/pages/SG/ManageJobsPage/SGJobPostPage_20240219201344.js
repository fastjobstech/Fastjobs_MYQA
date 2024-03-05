class SGJobPostPage {
    elements = {
        //Elements not related to Job posting form
        EnglishJobsNavlink: () => cy.get('.col-sm-12 > .nav > :nth-child(2) > a'),
        PostNewJobBtn: () => cy.get('.pull-right > .btn')
    }

    GotoPostNewJobForm = () => {
        this.elements.EnglishJobsNavlink().click()
        this.elements.PostNewJobBtn().click()
    }
}

module.exports = new SGJobPostPage()