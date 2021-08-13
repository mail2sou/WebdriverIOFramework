const login = require('../pages/login')
const configData = require('../config')
const constant = require('../constants')
const { assert } = require('chai')

describe('login page feature test' ,() => {

    it('should open the main url ', async () => {

        await browser.url('/')
        
    })

    it('verify Login' , async () => {

       await  login.enterLoginDetails(configData.username, configData.password)
    

    })

    it('Search Item ' , async () => {

        await  login.enterSearchDetails(constant.SearchItem)
           
 
     })

     it(' select Item' , async () => {

        await login.selectItem()
              
 
     })

     it('verify Item' , async () => {

        await login.verifyCartItem(constant.SearchItem)
              
 
     })

     it('Remove Item' , async () => {

        await login.removeItem()
              
 
     })

     it('LogOut' , async () => {

        await login.Logout()
              
 
     })







})