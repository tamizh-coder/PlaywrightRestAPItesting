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
}