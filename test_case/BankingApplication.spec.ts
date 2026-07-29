import test from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'

test('banking', async({page})=>{

    await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/online-banking.html")

    const loginpage = new LoginPage(page)
    await loginpage.doLogin("Debit User","demo")
    const homepage= new HomePage(page)
    await homepage.verifywelcomemsg()
    //Page Object Model

})