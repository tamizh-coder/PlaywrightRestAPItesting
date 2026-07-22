import { Locator, Page } from "@playwright/test";

export class HomePage{
    private welcomemessage: Locator

    constructor(page:Page)
    {
        this.welcomemessage=page.getByText("Welcome to DebitUser")
    
    }
}