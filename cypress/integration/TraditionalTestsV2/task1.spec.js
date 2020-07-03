const { runOn } = require('../../support/common');
const homePage = require("../../pages/home.page");
const task = 1;

describe("Task 1 - Cross-Device Elements Tests", () => {
  before(() => {
    homePage.navigateToAppVersion('V2');
  });

    // Laptop specific test suite
    runOn("Laptop", function () {
      it("Search field should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.searchInput.selector
        );
      });
  
      it("Wishlist heart icon should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.lnkWishlistIcon.selector
        );
      });
  
      it("Grid View icon should not be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.gridViewIcon.selector
        );
      });
  
      it("List View icon should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.listViewIcon.selector
        );
      });
  
      it("Filters label should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.filtersLabel.selector
        );
      });
  
      it("Filters Open Icon should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.openFilterIcon.selector
        );
      });
  
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
  
      it("Quick Links section should be expanded in footer", function() {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.quickLinksSection.selector
        );
      });
  
      it("Contacts section should be expanded in footer", function() {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.contactsSection.selector
        );
      });
  
      it("Keep In Touch section should be expanded in footer", function() {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.keepInTouchSection.selector
        );
      });
  
      it("Filter Column should  be displayed", function() {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.filterColumn.selector
        );
      });
  
      it("Number of cart items should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.numberOfItemsInCart.selector
        );
      });
  
      it("Mobile search button should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.mobileSearchBtn.selector
        );
      });
    });
  
    // Tablet specific test suite
    runOn("Tablet", function () {
      it("Search field should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.searchInput.selector
        );
      });
  
      it("Wishlist heart icon should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.lnkWishlistIcon.selector
        );
      });
  
      it("Grid View icon should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.gridViewIcon.selector
        );
      });
  
      it("List View icon should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.listViewIcon.selector
        );
      });
  
      it("Filters label should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.filtersLabel.selector
        );
      });
  
      it("Open Filter icon should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.openFilterIcon.selector
        );
      });
  
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
  
      it("Quick Links section should be expanded in footer", function() {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.quickLinksSection.selector
        );
      });
  
      it("Contacts section should be expanded in footer", function() {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.contactsSection.selector
        );
      });
  
      it("Keep In Touch section should be expanded in footer", function() {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.keepInTouchSection.selector
        );
      });
  
      it("Filter Column should not be displayed", function() {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.filterColumn.selector
        );
      });
  
      it("Number of cart items should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.numberOfItemsInCart.selector
        );
      });
  
      it("Mobile search button should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.mobileSearchBtn.selector
        );
      });
    });
  
    // Mobile specific test suite
    runOn("Mobile", function () {
      it("Search field should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.searchInput.selector
        );
      });
  
      it("Wishlist heart icon should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.lnkWishlistIcon.selector
        );
      });
  
      it("Grid View icon should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.gridViewIcon.selector
        );
      });
  
      it("List View icon should not be displayed", function() {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.listViewIcon.selector
        );
      });
  
      it("Filters label should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.filtersLabel.selector
        );
      });
  
      it("Open Filter icon should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.openFilterIcon.selector
        );
      });
  
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
  
      it("Quick Links section should be collapsed in footer", function() {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.quickLinksSection.selector
        );
      });
  
      it("Contacts section should be collapsed in footer", function() {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.contactsSection.selector
        );
      });
  
      it("Keep In Touch section should be collapsed in footer", function() {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.keepInTouchSection.selector
        );
      });
  
      it("Filter Column should not be displayed", function() {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.filterColumn.selector
        );
      });
  
      it("Number of cart items should not be displayed", function () {
        cy.assertIsNotDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.numberOfItemsInCart.selector
        );
      });
  
      it("Mobile search button should be displayed", function () {
        cy.assertIsDisplayedAndRecordResults(
          task,
          this.test.title,
          homePage.mobileSearchBtn.selector
        );
      });
    });
});
