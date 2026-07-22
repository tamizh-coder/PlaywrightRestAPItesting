import { expect, Locator, Page } from "@playwright/test";

export class HomePage{
    private welcomemessage: Locator

    constructor(page:Page)
    {
        this.welcomemessage=page.locator("welcomeUser")
    
    }

    async verifywelcomemsg()
    {
        await expect(this.welcomemessage).toHaveText("Welcome to DebitUser")
    }
}