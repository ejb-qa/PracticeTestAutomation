
const { By } = require("selenium-webdriver")

module.exports = {
    usernameField: By.css("input#username"),
    passwordField: By.css("input#password"),
    submitButton: By.css("button#submit"),
    congratsText: By.xpath("/html/body/div/div/section/div/div/article/div[2]/p[1]/strong")

}

