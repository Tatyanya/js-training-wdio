const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const MainPage = require('../pageobjects/main.page');

beforeEach(async () => {
    await browser.deleteCookies();

});
before(async () => {

    await browser.url(`https://www.onliner.by/`);
});
describe('Main menu link', () => {

    const tests = [
        { ind: 0, expected: 'Каталог Onliner', url: "https://catalog.onliner.by/" },
        { ind: 1, expected: 'Onliner', url: "https://www.onliner.by/" },
        { ind: 2, expected: 'Купить авто в Беларуси - Автобарахолка Onliner', url: "https://ab.onliner.by/" },
        { ind: 3, expected: 'Купить квартиру в Минске', url: "https://r.onliner.by/pk/" },
        { ind: 4, expected: 'Заказы на услуги', url: "https://s.onliner.by/tasks" },

    ];

    tests.forEach(({ ind, expected, url }) => {
        it(`can open main menu link and check title is ${expected} `, async () => {

            await MainPage.openMainMenuByIndex( ind);
        });
        it(`can check title is ${expected} `, async () => {

            await expect(browser).toHaveTitle(
                expected);
        });

        it(`can check url is ${url} `, async () => {

            await expect(browser).toHaveUrl(
                url);

        });
    });



});

describe('Check on main page', () => {

    before(async () => {

        await browser.url(`https://www.onliner.by/`);
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
        await browser.setTimeout({ 'implicit': 20000 })
      await  expect(MainPage.searchFrame).toExist()

        await browser.switchToFrame(0);            
            // });
            // it('can switch focus to iFrame', function () {
            await MainPage.openSearchResultByIndex(0);

            // await browser.setTimeout( 20000 )
            await expect(MainPage.searchResultName).toBeExisting();


    });
});

describe.skip('My Login application', () => {
    before(async () => {

        await browser.url(`https://www.onliner.by/`);
    });
    it('can see login button', async () => {

        await expect(MainPage.logInButton).toBeExisting();

    });
    it('can login with valid credentials', async () => {

        await LoginPage.login('testwdio', 'testwdio');
        await expect(SecurePage.profile).toBeExisting();

    });

});


