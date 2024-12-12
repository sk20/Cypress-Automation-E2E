import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'


describe('test automation', ()=>{

    it('registerflow',()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelepone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.checkPolicy()
        registerObj.clickSubmit()
    })
})