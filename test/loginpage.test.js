const openBrowser = require('../utils/driver.utils')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const LoginPage = require('../pageObjects/loginpage')

chai.use(chaiAsPromised)
const expect = chai.expect

const testURL = "https://practicetestautomation.com/practice-test-login/"

describe("Login page", function () {
    let loginPage
    let driver

    before(async function () {
        driver = openBrowser()
        driver.get(testURL)
        loginPage = new LoginPage(driver)
    })

    it("Successfully logs the user in when using valid credentials", async function () {
        await loginPage.enterUsername("student")
        await loginPage.enterPassword("Password123")
        await loginPage.selectSubmit()

        const successText = await loginPage.getSuccessLoginText()
        expect(successText).to.equal("Congratulations student. You successfully logged in!")
    })

    after(async function () {
        driver.close()
    })

})

