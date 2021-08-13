class ElementUtil {


        async doClick(element) {
        await  element.waitForDisplayed();
         element.click()

    }

       async moveToElement(element) {
        await  element.waitForDisplayed();
        await element.moveTo()

       }

        async doSetValue(element,value) {
        await element.waitForDisplayed()
        await element.setValue(value)

    }

    async doGetText(element) {

        await  element.waitForDisplayed()
        return await element.getText()
    }

       async doIsDisplayed(element) {
        await element.waitForDisplayed()
        return await element.isDisplayed()
     }
     async doGetPageTitle() {

        return browser.getTitle()
    }







}

module.exports = new ElementUtil()