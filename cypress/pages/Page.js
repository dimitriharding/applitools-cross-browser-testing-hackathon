/// <reference types="Cypress" />

class Page {

    // Header selectors, these are shared across pages
    get navbar()               { return this.selector('#UL____21'); }
    get cartIcon()             { return this.selector('#A__cartbt__49'); }
    get searchInput()          { return this.selector('#INPUTtext____42'); }
    get accountIcon()          { return this.selector('#A__accesslink__56')}
    get mobileSearchBtn()      { return this.selector('#A__btnsearchm__59'); }
    get lnkWishlistIcon()      { return this.selector('#A__wishlist__52'); }
    get numberOfItemsInCart()  { return this.selector('#STRONG____50'); }

    // Footer selectors, these are shared across pages
    get contactsSection()      { return this.selector('#collapse_3')}
    get quickLinksSection()    { return this.selector('#collapse_1'); }
    get keepInTouchSection()   { return this.selector('#collapse_4'); }

    /**
      * Creates on object that has the actual selector and the cypress chainable selector
      * Since cypress does not expose the selector
      * @param {String} selector 
      */
     selector(selector){
        return {
           selector: selector,
           get: () => cy.get(selector)
        }                                                              
    }

    /**
     * Returns the attribute value for the specified element and attribute name
     *  
     * @param {String} selector - Selector to query
     * @param {String} attributeName - Name of attribute to get value from
     * 
     * @return {String}
     */
    getAttributeValue(selector, attributeName){
        const attributeValue = Cypress.$(selector).attr(attributeName);
        return attributeValue;
    }

    /**
     * Returns the property value for the specified element and property name
     * 
     * @param {String} selector - Selector to query
     * @param {String} propertyName - Name of property to get the value from
     * 
     * @return {String}
     */
    getCSSPropertyValue(selector, propertyName){
        const propertyValue = Cypress.$(selector).css(propertyName);
        return propertyValue;
    }


    /**
     * Returns the text for the specified selector
     * 
     * @param {String} selector - Selector to query and get text from
     * @return {String}
     */
    getText(selector){
        const selectorText = Cypress.$(selector).text();
        return selectorText;
    }

    /**
     * Returns the version of the app specified by the APP_VERSION environmental variable
     */
    getAppVersion(){
        return Cypress.env("appVersion");
    }
    /**
     * This method checks if a specified main element is overlapping with the specified reference element.
     * ... code from: https://gist.github.com/jtsternberg/c272d7de5b967cec2d3d
     * 
     * @param  {String} selector1 - Main selector that we will be checking to determine if it is overlapping
     * @param  {String} selector2 - Reference selector that the main selector will be checked against
     * 
     * @returns {Boolean} - Boolean that tells if the elements are overlapping
     */
    checkIfElementsOverlap(selector1, selector2) {
            const $selector1 = Cypress.$(selector1);
            const $selector2 = Cypress.$(selector2);

            // element 1 data
            const d1_offset             = $selector1.offset();
            const d1_height             = $selector1.outerHeight( true );
            const d1_width              = $selector1.outerWidth( true );
            const d1_distance_from_top  = d1_offset.top + d1_height;
            const d1_distance_from_left = d1_offset.left + d1_width;

            // element 2 data
            const d2_offset             = $selector2.offset();
            const d2_height             = $selector2.outerHeight( true );
            const d2_width              = $selector2.outerWidth( true );
            const d2_distance_from_top  = d2_offset.top + d2_height;
            const d2_distance_from_left = d2_offset.left + d2_width;

            const not_colliding = ( d1_distance_from_top < d2_offset.top ||
                 d1_offset.top > d2_distance_from_top ||
                d1_distance_from_left < d2_offset.left ||
                 d1_offset.left > d2_distance_from_left );

	        // Return whether it IS colliding
	        return !not_colliding;
    }

    /**
     * Navigates to the specified app version (V1 or V2)
     * 
     * @param {String} versionNumber - App version to navigate to
     */
    navigateToAppVersion(versionNumber){
        cy.visit(versionNumber);
    }
}

module.exports = Page;