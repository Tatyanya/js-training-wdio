const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get profile () { return $('#userbar .b-top-profile__preview') }

}

module.exports = new SecurePage();