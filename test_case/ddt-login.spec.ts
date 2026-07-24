import test, { expect } from "@playwright/test"
import logindata from "../test_data/test-date.json" // importing Json data array


//define a typescript interface to enforce type safety on your test data

interface LoginTestData{
    scenario:string;
    username:string;
    password:string;
    isSuccess:boolean;
    errorMessage?:string; // optional field
}

const credentialslist =  logindata as LoginTestData[];

test.describe('data-driven login test',()=> {
    for (const data of credentialslist){
         test(`verify login behaviour for: ${data.scenario}`, async ({ page }) => {
            await page.goto("https://saucedemo.com");
            await page.locator('[data-test="username"]').fill(data.username);
        
            await page.locator('[date-test="password"]').fill(data.password);
            await page.locator('[data-test="login-button"]').click();

            if(data.isSuccess){
                await expect(page).toHaveURL('https://saucedemo.cominventory.html');
            } else{
                const errorContainer= page.locator('[data-test="error"]');
                await expect(errorContainer).toBeVisible();
                await expect(errorContainer).toHaveText('data.errorMessage!')
            }

        })

    }

})