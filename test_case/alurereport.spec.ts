import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.describe('Allure Report Practice Suite', () => {
  
  test('Successful Form Submission with Metadata', async ({ page }) => {
    // Adding rich metadata for the Allure dashboard
    await allure.epic('Web Application Features');
    await allure.feature('Authentication and Forms');
    await allure.story('User Registration');
    await allure.severity('critical');
    await allure.description('This test verifies that a user can successfully fill and submit a form.');
    await allure.owner('QA Automation Team');

    // Grouping actions into structured Allure steps
    await allure.step('Navigate to the practice form page', async () => {
      await page.goto('https://demoqa.com');
      await expect(page).toHaveURL(/.*text-box/);
    });

    await allure.step('Fill out user credentials', async () => {
      await page.fill('#userName', 'John Doe');
      await page.fill('#userEmail', 'johndoe@example.com');
      await page.fill('#currentAddress', '123 Testing Street');
    });

    await allure.step('Submit the form', async () => {
      await page.click('#submit');
    });

    await allure.step('Verify form output results', async () => {
      const output = page.locator('#output');
      await expect(output).toBeVisible();
      await expect(output).toContainText('Name:John Doe');
    });
  });

  test('Intentional Test Failure to Check Artifacts', async ({ page }) => {
    await allure.feature('Error Handling');
    await allure.severity('normal');

    await allure.step('Navigate to practice page', async () => {
      await page.goto('https://demoqa.com');
    });

    await allure.step('Execute failing assertion', async () => {
      // This will fail intentionally to trigger screenshots and video saves in Allure
      await expect(page.locator('#submit')).toHaveText('Non-existent Button Text');
    });
  });
});
