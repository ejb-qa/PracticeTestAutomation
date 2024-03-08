const { By } = require("selenium-webdriver")

module.exports = {
    usernameField: By.css("input#username"),
    passwordField: By.css("input#password"),
    submitButton: By.css("button#submit"),
    congratsText: By.css("p.has-text-align-center")
}