const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logInButton() { return $('#userbar .auth-bar__item:not([title])') }
    get searchInput() { return $('.fast-search__input') }
    get mainBarLinks() { return $$('.b-top-navigation>ul:nth-child(1)>li') }
    get footerCopy() { return $('.footer-style__copy') }
    get searchFrame() { return $('iframe.modal-iframe') }
    get searchResult() { return $$('.search__content-wrapper .search__results>*.search__result') }

    get searchResultName() { return $('div.catalog-masthead') }
    async typeTextInSearchField(text) {
        await this.searchInput.setValue(text);

    }
    async openSearchResultByIndex(index) {
        await this.searchResult[index].click();

    }

    async openMainMenuByIndex(index) {
        await this.mainBarLinks[index].click();

    }

    async getElementValue() {
        await super.getElementValue(this.searchInput);
    }
}

module.exports = new MainPage();
