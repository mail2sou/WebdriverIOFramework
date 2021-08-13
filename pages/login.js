const { assert } = require('chai')
const elementUtil = require('../util/elementUtil')


  class login {

     get email () { return   $('input[class="_2IX_2- VJZDxU"]')}
     get password () { return  $('input[class="_2IX_2- _3mctLh VJZDxU"]')}
     get logIn () { return  $('//div[text()="OR"]/preceding::button[1]')}
     get Search() { return $('[title="Search for products, brands and more"]')}
     get btnSearch() { return $('[type="submit"]')}
     get lstSearchFirst () { return $('//div[text()="Newest First"]/following::div[1]/descendant::a')}
     get lnkAddToCart() { return $('//button[text()="ADD TO CART"]')}
     get lnk_CartItem() { return $('//div[text()="My Cart (1)"]/following::a[2]')}
     get lnk_Remove() { return $('//div[text()="Remove"]')}
     get lnk_Remove_Sure() { return $('//div[text()="Cancel"]/following::div[text()="Remove"][1]')}
     get lnk_LoginName() {return $('.exehdJ')}
     get lnk_Logout() { return $('//div[text()="Logout"]')}

     

//Login
   async  enterLoginDetails(emailId, pass) {
  
    await elementUtil.doSetValue(await this.email, emailId)
    await elementUtil.doSetValue(await this.password,pass)
    await elementUtil.doClick(await this.logIn)
    
}

//Search for Item
async  enterSearchDetails(search) {
  await browser.pause(3000)
  await elementUtil.doSetValue(await this.Search, search)
  await elementUtil.doClick(await this.btnSearch)
  await browser.pause(2000)

}

//select item
  async  selectItem() {
    var parentGUID = await browser.getWindowHandle();
    await elementUtil.doClick(await this.lstSearchFirst)
    await browser.pause(1000);
    var allGUID = await browser.getWindowHandles();
    console.log("Page title before Switching : "+ browser.getTitle());
    console.log("Total Windows : "+allGUID.length);

      for(var i = 0; i< allGUID.length;i++){
      if(allGUID[i] != parentGUID){
				// switch to the guid
				await browser.switchToWindow(allGUID[i]);
				// break the loop
        	break;
			}
		}
    await browser.pause(1000);
    await elementUtil.doClick(await this.lnkAddToCart)
  
}

//verify cart item
  async  verifyCartItem(value) {

    let text = await elementUtil.doGetText(await this.lnk_CartItem)
    assert.equal(text, value,'Cart Item Matches')
  

  }
//Remove Item
  async  removeItem() {

  await elementUtil.doClick(await this.lnk_Remove)
  await elementUtil.doClick(await this.lnk_Remove_Sure)
}

//LogOut 
  async  Logout() {

  await elementUtil.moveToElement(await this.lnk_LoginName)
  await browser.pause(1000);
  await elementUtil.doClick(await this.lnk_Logout)
  await browser.pause(1000);
  await elementUtil.doIsDisplayed(await this.email)
  await browser.pause(1000)


  }
}


module.exports = new login()