const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get profile () { return $('#userbar .b-top-profile__preview') }
    
}

module.exports = new MainPage();
