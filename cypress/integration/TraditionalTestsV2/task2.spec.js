const { runOn } = require("../../support/common");
const homePage = require("../../pages/home.page");
const expectedImageBaseSource = "/grid/img/products/shoes/";
const task = 2;

describe("[V2] Traditional Task 2 - Shopping Experience Test", () => {
  before(() => {
    homePage.navigateToAppVersion('V2');

    // Open filter stray if the current device is Mobile or Tablet
    if (!Cypress.env("isDesktop")) homePage.openFilterIcon.get().click();
    homePage.filterByColor("Black");
  });

  // Will be ran on all devices
  it("Filter by Black color, there should only be two results", function () {
    cy.assertLengthAndRecordResults(
      task,
      this.test.title,
      homePage.gridItems.selector,
      2
    );
  });

  it("Shoes name should be displayed for all products", function () {
    homePage.shoesName.get().then(($shoesName) => {
      $shoesName.each((i, $name) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $name);
      });
    });
  });

  it("New price should be displayed for all products", function () {
    homePage.shoesNewPrice.get().then(($shoesNewPrice) => {
      $shoesNewPrice.each((i, $newPrice) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $newPrice);
      });
    });
  });

  it("A product image should be present for all products", function () {
    homePage.productImages.get().then(($productImages) => {
      $productImages.each((i, $productImage) => {
        const imageSource = homePage.getAttributeValue($productImage, "src");
        cy.assertIsIncludedAndRecordResults(
          task,
          this.test.title,
          $productImage,
          imageSource,
          expectedImageBaseSource
        );
      });
    });
  });

  // Laptop specific test suite
  runOn("Laptop", function () {
    it("Add to Favorite icon should not be displayed for all products", function () {
      homePage.addToFavoriteIcon.get().then(($addToFavoriteIcons) => {
        $addToFavoriteIcons.each((i, $icon) => {
          cy.assertIsNotDisplayedAndRecordResults(task, this.test.title, $icon);
        });
      });
    });

    it("Add to Compare icon should not be displayed for all products", function () {
      homePage.addToCompareIcon.get().then(($addToCompareIcon) => {
        $addToCompareIcon.each((i, $icon) => {
          cy.assertIsNotDisplayedAndRecordResults(task, this.test.title, $icon);
        });
      });
    });

    it("Add to Cart icon should not be displayed for all products", function () {
      homePage.addToCartIcon.get().then(($addToCartIcon) => {
        $addToCartIcon.each((i, $icon) => {
          cy.assertIsNotDisplayedAndRecordResults(task, this.test.title, $icon);
        });
      });
    });
  });
});

// Tablet specific test suite
runOn("Tablet", function () {
  it("Add to Favorite icon should be displayed for all products", function () {
    homePage.addToFavoriteIcon.get().then(($addToFavoriteIcons) => {
      $addToFavoriteIcons.each((i, $icon) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $icon);
      });
    });
  });

  it("Add to Compare icon should be displayed for all products", function () {
    homePage.addToCompareIcon.get().then(($addToCompareIcon) => {
      $addToCompareIcon.each((i, $icon) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $icon);
      });
    });
  });

  it("Add to Cart icon should be displayed for all products", function () {
    homePage.addToCartIcon.get().then(($addToCartIcon) => {
      $addToCartIcon.each((i, $icon) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $icon);
      });
    });
  });
});

// Mobile specific test suite
runOn("Mobile", function () {
  it("Add to Favorite icon should be displayed for all products", function () {
    homePage.addToFavoriteIcon.get().then(($addToFavoriteIcons) => {
      $addToFavoriteIcons.each((i, $icon) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $icon);
      });
    });
  });

  it("Add to Compare icon should be displayed for all products", function () {
    homePage.addToCompareIcon.get().then(($addToCompareIcon) => {
      $addToCompareIcon.each((i, $icon) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $icon);
      });
    });
  });

  it("Add to Cart icon should be displayed for all products", function () {
    homePage.addToCartIcon.get().then(($addToCartIcon) => {
      $addToCartIcon.each((i, $icon) => {
        cy.assertIsDisplayedAndRecordResults(task, this.test.title, $icon);
      });
    });
  });
});
