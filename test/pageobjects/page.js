/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param url path of the sub page (e.g. /path/to/page.html)
    */
    open(url) {
        return browser.url(url)
    }

    getBrowser() {
        return browser
    }

    getElementValue(elem) {
        return elem.getValue();

    }

    pressEnter() {
       browser.keys("\uE007"); 

    }


}
