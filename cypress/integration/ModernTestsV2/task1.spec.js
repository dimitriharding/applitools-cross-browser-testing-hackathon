const homePage = require("../../pages/Home.page");

describe("[V2] Mordern Tests", () => {

    before(() => {
        cy.viewport(800, 600);
         // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion App',
            testName: 'Task 1',
        });

        homePage.navigateToAppVersion('V2');
    });

    it(`Cross-Device Elements Test`, function () {

        cy.eyesCheckWindow({
            tag: this.test.title,
            target: 'window',
            fully: true
        });
    });

    after(() => {
        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });
});