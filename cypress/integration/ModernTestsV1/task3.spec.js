const homePage = require("../../pages/home.page");

describe("[V1] Mordern Tests Task 3", () => {

    before(() => {
        cy.viewport(800, 600);
         // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion App',
            testName: 'Task 3',
        });

        homePage.navigateToAppVersion('V1');
    });

    it('Product Details test', function () {
        //Click the first product in the grid
        homePage.clickProduct(0);

        //Capture full-page screenshot of new product detail page
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