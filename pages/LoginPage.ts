import { Locator, Page } from "@playwright/test";


export class LoginPage{

    private usernameTextBox:Locator
    private passwordtextbox:Locator
    private LoginButton:Locator

    constructor (page:Page)
    {
        this.usernameTextBox=page.getByPlaceholder("Enter your username")
        this.passwordtextbox=page.getByPlaceholder("Enter your password")
        this.LoginButton=page.getByText("Login")
    }

    async doLogin(username:string, password:string)
    {
        await this.usernameTextBox.fill(username)
        await this.passwordtextbox.fill(password)
        await this.LoginButton.click
    }
}