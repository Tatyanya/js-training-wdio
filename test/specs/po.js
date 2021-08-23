class AngularHomepage {
    get nameInput() { return $("input[ng-model=yourName]") }
    get greeting() { return $('h1.ng-binding') }

    async open(path) {
        await browser.url(path)
    }

};

describe('angularjs homepage', async () => {
    it('should greet the named user', async () => {
        const angularHomepage = new AngularHomepage();

        const url = 'http://www.angularjs.org';
        await angularHomepage.open(url).then(() => {
            return angularHomepage.nameInput.setValue('Julie');
        }).then(() => {
            return angularHomepage.greeting.getText();
        }).then(text => {
            expect(text).toHaveValue('Hello Julie!');

        });
    });
});

