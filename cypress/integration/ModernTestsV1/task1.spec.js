const homePage = require("../../pages/Home.page");

describe("[V1] Mordern Tests Task 1", () => {

    before(() => {
        cy.viewport(800, 600);
         // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion App',
            testName: 'Task 1',
        });

        homePage.navigateToAppVersion('V1');
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