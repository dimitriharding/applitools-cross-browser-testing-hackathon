/// <reference types="Cypress" />

const page = require('./Page');
const PRICE_REGEX = /^\$\d{0,8}\.\d{2}$/;

class ProductDetails extends page {

    /**
     * Selectors
     */
    get lastStar()          { return this.selector('#I__iconstarvo__79') }
    get sizeLabel()         { return this.selector('#STRONG____90'); }
    get sizeSelect()        { return this.selector('#DIV__customsele__92'); }
    get reviewsLbl()        { return this.selector('em[id*="82"]'); }
    get newPriceTxt()       { return this.selector('#new_price'); }
    get oldPriceTxt()       { return this.selector('#old_price'); }
    get discountTxt()       { return this.selector('#discount'); }
    get smallSizeOpt()      { return this.selector('#OPTION____94'); }
    get addToCartBtn()      { return this.selector('#DIV__btnaddtoca__113'); }
    get shoesNameLbl()      { return this.selector('#shoe_name'); }
    get qualityLabel()      { return this.selector('#STRONG____100'); }
    get skuDetailsLbl()     { return this.selector('#SMALL____84'); }
    get qualitySelect()     { return this.selector('#DIV__numbersrow__102'); } 
    get productDetailsImg() { return this.selector('#shoe_img'); }

    /**
     * Checks the format of the specified price to ensure that it starts with a dollar $ 
     * and has two decimal places by using regular expression
     * 
     * 
     * @param {String} priceText - The price text that will be tested
     * @return {Boolean}
     */
    checkNewPriceFormat(){
        let priceText = this.getText(this.newPriceTxt.selector);
        return PRICE_REGEX.test(priceText);
    }

    /**
     * Checks the format of the old price to ensure that it is greyed-out and has a 
     * line through it. 
     * 
     * @return {Boolean}
     */
    checkOldPriceFormat(){
        const textDecoration = this.getCSSPropertyValue(this.oldPriceTxt.selector, 'text-decoration');
        const color = this.getCSSPropertyValue(this.oldPriceTxt.selector, 'color');
        const priceText = this.getText(this.oldPriceTxt.selector);

        return  (textDecoration.includes('line-through') && color.includes('rgb(153, 153, 153)') && PRICE_REGEX.test(priceText));
    }

    /**
     * Returns the background image url for the main image the product detail page
     * 
     * @param {String} expectedUrl 
     */
    getProductDetailsImageUrl(){
        let backgroundImageUrl = this.getCSSPropertyValue(this.productDetailsImg.selector, 'background-image');
        return backgroundImageUrl ;
    }

    /**
     * Checks the format of the size option against the provided expected text
     * 
     * @param {String} expectedText The expected text in the correct format
     */
    checkSizeFormat(expectedText){
        const sizeText = this.getText(this.smallSizeOpt.selector);
        return (expectedText === sizeText);
    }
}

module.exports = new ProductDetails();