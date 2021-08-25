const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const MainPage = require('../pageobjects/main.page');

beforeEach(async () => {
    await browser.deleteCookies();

});
before(async () => {
    await browser.maximizeWindow();

    await MainPage.open("/");
});
describe('Main menu link', () => {

    const tests = [
        { ind: 0, expected: 'Каталог Onlíner', url: "https://catalog.onliner.by/" },
        { ind: 1, expected: 'Onliner', url: "https://www.onliner.by/" },
        { ind: 2, expected: 'Купить авто в Беларуси - Автобарахолка Onliner', url: "https://ab.onliner.by/" },
        { ind: 3, expected: 'Купить квартиру в Минске', url: "https://r.onliner.by/pk/" },
        { ind: 4, expected: 'Заказы на услуги', url: "https://s.onliner.by/tasks" },

    ];

    tests.forEach(({ ind, expected, url }) => {
        it(`can open main menu link and check title is ${expected} `, async () => {

            await MainPage.openMainMenuByIndex(ind);
        });
        it(`can check title is ${expected} `, async () => {

            await expect(browser).toHaveTitle(
                expected);
        });

        it(`can check url is ${url} `, async () => {

            await expect(browser).toHaveUrlContaining(
                url);

        });
    });

});

describe('Check on main page', () => {

    before(async () => {
        await MainPage.open(`/`);
    });
    it('can check footer copy text', async () => {

        await MainPage.footerCopy.scrollIntoView()

        await expect(MainPage.footerCopy).toHaveText(
            '© 2001—2021 Onlíner');

    });
    it('can enter text into search field and check value', async () => {

        await MainPage.typeTextInSearchField('test');

        await expect(MainPage.searchInput).toHaveValue(
            'test');

    });

    it('can open search result', async () => {

        await expect(MainPage.searchFrame).toExist();
        await browser.switchToFrame(await MainPage.searchFrame);
        await expect(await MainPage.searchResult).toBeDisplayed();
        await MainPage.openSearchResultByIndex(1);

        await expect(MainPage.searchResultName).toBeExisting();

    });
});

describe('Check Login application', () => {
    before(async () => {

        await browser.url(`/`);
    });
    it('can see login button', async () => {

        await expect(MainPage.logInButton).toBeExisting();

    });
    it('can login with valid credentials', async () => {

        await LoginPage.login('testwdio', 'testwdio');
        await expect(SecurePage.profile).toBeExisting();

    });

});


