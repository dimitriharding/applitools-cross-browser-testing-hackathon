const homePage = require("../../pages/Home.page");

describe("[V2] Mordern Tests - Task 2", () => {
  before(() => {
    cy.viewport(800, 600);
    // Call Open on eyes to initialize a test session
    cy.eyesOpen({
      appName: "AppliFashion App",
      testName: "Task 2",
    });

    homePage.navigateToAppVersion('V2');
  });

  it(`Filter Results`, function () {
    homePage.openFilterIcon.get().click();
    homePage.filterByColor("Black");
    cy.eyesCheckWindow({
      tag: this.test.title,
      target: "region",
      selector: homePage.productGrid.selector,
    });
  });

  after(() => {
    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
  });
});
