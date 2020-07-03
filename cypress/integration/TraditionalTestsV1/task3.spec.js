const { runOn } = require("../../support/common");
const productDetailPage = require("../../pages/ProductDetails.page");
const homePage = require("../../pages/Home.page");
const task = 3;

describe("[V1] Traditional Task 3 - Product Details Test", () => {
  before(() => {
    homePage.navigateToAppVersion('V1');

    // Click on the first product
    homePage.clickProduct(0);
  });

  runOn("Laptop", function () {
    it("Search field should be displayed", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.searchInput.selector
      );
    });

    it("Navbar should be displayed", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.navbar.selector
      );
    });

    it("Quick Links section should be collapsed in footer", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.quickLinksSection.selector
      );
    });

    it("Contacts section should be collapsed in footer", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.contactsSection.selector
      );
    });

    it("Keep In Touch section should be collapsed in footer", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.keepInTouchSection.selector
      );
    });

    it("Number of cart items should be displayed", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.numberOfItemsInCart.selector
      );
    });

    it("Mobile search button should be displayed", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.mobileSearchBtn.selector
      );
    });
  });

  runOn("Tablet", function () {
    it("Search field should be displayed", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.searchInput.selector
      );
    });

    it("Navbar should not be displayed", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.navbar.selector
      );
    });

    it("Quick Links section should be collapsed in footer", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.quickLinksSection.selector
      );
    });

    it("Contacts section should be collapsed in footer", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.contactsSection.selector
      );
    });

    it("Keep In Touch section should be collapsed in footer", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.keepInTouchSection.selector
      );
    });

    it("Number of cart items should be displayed", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.numberOfItemsInCart.selector
      );
    });

    it("Mobile search button should be displayed", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.mobileSearchBtn.selector
      );
    });
  });

  runOn("Mobile", function () {
    it("Search field should not be displayed", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.searchInput.selector
      );
    });

    it("Navbar should not be displayed", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.navbar.selector
      );
    });

    it("Quick Links section should be collapsed in footer", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.quickLinksSection.selector
      );
    });

    it("Contacts section should be collapsed in footer", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.contactsSection.selector
      );
    });

    it("Keep In Touch section should be collapsed in footer", function () {
      cy.assertIsNotDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.keepInTouchSection.selector
      );
    });

    it("Number of cart items should be displayed", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.numberOfItemsInCart.selector
      );
    });

    it("Mobile search button should be displayed", function () {
      cy.assertIsDisplayedAndRecordResults(
        task,
        this.test.title,
        productDetailPage.mobileSearchBtn.selector
      );
    });
  });

  it("Size format should be [Size (capital first letter of size)] - example Small (S)", function () {
    const isExpectedFormat = productDetailPage.checkSizeFormat("Small (S)");
    cy.assertIsTrueAndRecordResults(
      task,
      this.test.title,
      productDetailPage.smallSizeOpt.selector,
      isExpectedFormat
    );
  });

  it("The product image should be displayed", function () {
    // While we can check if image URL is the string we expected and not empty
    // there should still be a visual regression where the shoes itself is wrong
    const actualProductDetailsImage = productDetailPage.getProductDetailsImageUrl();
    const expectedProductDetailsImage = "grid/img/products/shoes/1.jpg";
    cy.assertIsIncludedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.productDetailsImg.selector,
      actualProductDetailsImage,
      expectedProductDetailsImage
    );
  });

  it.skip("Review Text and Stars should not overlap", function () {
    // Unable to test traditionally unless the use of a visual regression module is used
    // Even with the 'productDetailPage.checkIfElementsOverlap' method
    // checking if the elements is overlapping would not be accurate because of how it is nested
    const isOverlapping = productDetailPage.checkIfElementsOverlap(
      productDetailPage.lastStar.selector,
      productDetailPage.reviewsLbl.selector
    );
    const itNotOverLapping = !isOverlapping;
    cy.assertIsTrueAndRecordResults(
      task,
      this.test.title,
      productDetailPage.lastStar.selector,
      itNotOverLapping
    );
  });

  it("Price should be displayed properly with cents", function () {
    const isExpectedFormat = productDetailPage.checkNewPriceFormat();
    cy.assertIsTrueAndRecordResults(
      task,
      this.test.title,
      productDetailPage.newPriceTxt.selector,
      isExpectedFormat
    );
  });

  it("The Old price should be greyed out and have line-through, and have cents", function () {
    const isExpectedFormat = productDetailPage.checkOldPriceFormat();
    cy.assertIsTrueAndRecordResults(
      task,
      this.test.title,
      productDetailPage.oldPriceTxt.selector,
      isExpectedFormat
    );
  });

  it("The 'Add to Cart' button should not overlay the Quantity option", function () {
    const isOverlapping = productDetailPage.checkIfElementsOverlap(
      productDetailPage.addToCartBtn.selector,
      productDetailPage.qualitySelect.selector,
      "top"
    );
    const itNotOverLapping = !isOverlapping;
    cy.assertIsTrueAndRecordResults(
      task,
      this.test.title,
      productDetailPage.addToCartBtn.selector,
      itNotOverLapping
    );
  });

  it("The 'Add to Cart' button should be displayed", function () {
    cy.assertIsDisplayedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.addToCartBtn.selector
    );
  });

  it("The account and wishlist icon should not overlap", function () {
    // While we are able to tell if they are overlapping, this is still not an effective way
    // and definitely not the most obvious
    const isOverlapping = productDetailPage.checkIfElementsOverlap(
      productDetailPage.accountIcon.selector,
      productDetailPage.lnkWishlistIcon.selector,
      "left"
    );
    const itNotOverLapping = !isOverlapping;
    cy.assertIsTrueAndRecordResults(
      task,
      this.test.title,
      productDetailPage.accountIcon.selector,
      itNotOverLapping
    );
  });

  it("The wishlist and cart icon should not overlap", function () {
    // While we are able to tell if they are overlapping, this is still not an effective way
    // and definitely not the most obvious
    const isOverlapping = productDetailPage.checkIfElementsOverlap(
      productDetailPage.lnkWishlistIcon.selector,
      productDetailPage.cartIcon.selector,
      "left"
    );
    const itNotOverLapping = !isOverlapping;
    cy.assertIsTrueAndRecordResults(
      task,
      this.test.title,
      productDetailPage.lnkWishlistIcon.selector,
      itNotOverLapping
    );
  });

  it("The profile icon should be displayed", function () {
    cy.assertIsDisplayedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.accountIcon.selector
    );
  });

  it("The wishlist icon should be displayed", function () {
    cy.assertIsDisplayedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.lnkWishlistIcon.selector
    );
  });

  it("The cart icon should be displayed", function () {
    cy.assertIsDisplayedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.cartIcon.selector
    );
  });

  it("SKU details should be displayed", function () {
    cy.assertIsDisplayedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.skuDetailsLbl.selector
    );
  });

  it("Discount details should be displayed", function () {
    cy.assertIsDisplayedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.discountTxt.selector
    );
  });

  it("Review details should be displayed", function () {
    cy.assertIsDisplayedAndRecordResults(
      task,
      this.test.title,
      productDetailPage.reviewsLbl.selector
    );
  });
});
