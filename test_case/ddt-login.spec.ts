import test from "@playwright/test"
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
    for (const data as credentialslist){
         test('verify login behaviour for:${data.scenario}', async ({page})=>
        {
            await page.goto("https://saucedemo.com");
            await page.locator('[data-test="username"]').fill(data.username)
            await page.locator('[date-test="password')

        })

    }

})