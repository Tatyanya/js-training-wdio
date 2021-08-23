const Page = require('./page');
const MainPage = require('./main.page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('.auth-form__field [type=text]') }
    get inputPassword () { return $('.auth-form__field [type=password]') }
    get btnSubmit () { return $('.auth-form__control button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await MainPage.logInButton.click();

        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (url) {
        return super.open(url);
    }
}

module.exports = new LoginPage();
