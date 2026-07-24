import test, { expect } from "@playwright/test"
import loginData from "../test_data/test-date.json"  with {type:'json'}// importing Json data array


//define a typescript interface to enforce type safety on your test data

interface LoginTestData{
    scenario:string;
    username:string;
    password:string;
    isSuccess:boolean;
    errorMessage?:string; // optional field
}

const credentialslist =  loginData as LoginTestData[];

test.describe('data-driven login test',()=> {
    for (const data of credentialslist){
         test(`verify login behaviour for: ${data.scenario}`, async ({ page }) => {
            await page.goto("https://saucedemo.com");
            await page.locator('//*[@id="user-name"]').fill(data.username);
        
            await page.locator('//*[@id="password"]').fill(data.password);
            await page.locator('//*[@id="login-button"]').click();

            if(data.isSuccess){
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            } else{
                const errorContainer= page.locator('//*[@id="login_button_container"]/div/form/div[3]');
                await expect(errorContainer).toBeVisible();
                await expect(errorContainer).toHaveText('data.errorMessage!')
            }

        })

    }

})