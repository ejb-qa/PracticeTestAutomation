const Locator = require("../pageLocators/locators")

class LoginPage {

    constructor(driver) {
        this.driver = driver
    }

    async enterUsername() {
        const enterUsername = await this.driver.findElement(Locator.usernameField)
        await enterUsername.sendKeys("student")
    }

    async enterPassword() {
        const enterPassword = await this.driver.findElement(Locator.passwordField)
        await enterPassword.sendKeys("Password123")
    }

    async selectSubmit() {
        const selectSubmit = await this.driver.findElement(Locator.submitButton)
        await selectSubmit.click()
    }

    async getSuccessLoginText() {
        const getCongratsText = await this.driver.findElement(Locator.congratsText)
        const congratsText = await getCongratsText.getText()
        return congratsText
    }
}


module.exports = LoginPage

