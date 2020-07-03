/// <reference types="Cypress" />

const page = require('./Page');

class Home extends page {

    /**
     * Selectors
     */
     get gridItems()            { return this.selector('.grid_item'); }
     get filterBtn()            { return this.selector('#filterBtn'); }
     get shoesName()            { return this.selector('.grid_item [id*="H3"]')}
     get productGrid()          { return this.selector('#product_grid'); }
     get filtersLabel()         { return this.selector('.open_filters [id*="SPAN"]'); }
     get gridViewIcon()         { return this.selector('[id*="tiviewgrid"]'); }
     get listViewIcon()         { return this.selector('[id*="tiviewlist"'); }
     get productItem1()         { return this.selector('#DIV__griditem__211'); }
     get filterColumn()         { return this.selector('#filter_col'); }
     get shoesNewPrice()        { return this.selector('.new_price'); }
     get productImages()        { return this.selector('.img-fluid'); }
     get addToCartIcon()        { return this.selector('[id*="I__tishopping"]'); }
     get openFilterIcon()       { return this.selector('#ti-filter'); }
     get addToCompareIcon()     { return this.selector('[id*="I__ticontrols"]'); }
     get addToFavoriteIcon()    { return this.selector('[id*="I__tiheart"]'); }

     /**
      * Filter items by the specified color, by checking the specified color
      * then clicking on the filter button
      * 
      * @param {String} colorName - The color name to filter by, it must start with a capital letter
      */
     filterByColor(colorName){
        cy.get(`[id*=${colorName}]`)
          .click();
        this.filterBtn.get().click();
     }

     /**
      * Clicks on a product based on the specified index
      * starting at 0, from left to right
      * 
      * @param {Number} productIndex - The index of the product that should be selected
      */
     clickProduct(productIndex){
        this.gridItems.get().eq(productIndex).click();
     }  
}

module.exports = new Home();