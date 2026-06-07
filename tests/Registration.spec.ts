import { test, expect } from '@playwright/test';
import testData from '../test-data/registrationData.json';

test.describe('CD Buyer Registration', () => {

  test('Verify user can register as CD Buyer', async ({ page }) => {

    await test.step('Navigate to DigiELV Application', async () => {
      await page.goto('https://digielv.com/user-login');
      await expect(page).toHaveURL(/user-login/);
    });

    await test.step('Login to Application', async () => {
      await page.locator('[name="mob_no"]').fill(testData.mobileNo);
    });

    await test.step('Open Registration Form', async () => {
      await page.getByRole('link', { name: 'Register Here' }).click();
      await page.getByText('CD Buyer Registration').click();
    });

    await test.step('Enter PAN Details', async () => {
      await page.getByPlaceholder('Enter Your Pan No').fill(testData.panNo);

      const gotItBtn = page.getByRole('button', { name: 'Got it' });
        await expect(gotItBtn).toBeEnabled();
        await gotItBtn.click();
      }
    );

    await test.step('Fill Buyer Information', async () => {

      await page
        .getByPlaceholder('Enter Your Email')
        .first()
        .fill(testData.email);

      await page
        .getByPlaceholder('Enter Your mobile number')
        .fill(testData.contactNo);

      const pincodeDropdown = page.getByRole('combobox', {
        name: 'Type to search Pincode'
      });

      await pincodeDropdown.fill(testData.pincode);

      await page
        .getByRole('listbox', { name: 'Option List' })
        .locator('li')
        .first()
        .click();

      await page
        .getByPlaceholder('Enter Your Address')
        .fill(testData.address);

    });


    await test.step('Select GST Number', async () => {

      await page.getByLabel('Select a GST No').click();

      await page
        .getByRole('listbox', { name: 'Option List' })
        .locator('li')
        .first()
        .click();
    });

    await test.step('Fill Authorized Person Details', async () => {

      await page
        .getByPlaceholder('Enter Your Name')
        .nth(1)
        .fill(testData.name);

      await page
        .getByPlaceholder('Please Enter 10-digit mobile number')
        .fill(testData.contactNo);

      await page
        .getByPlaceholder('Enter Your Email')
        .nth(1)
        .fill(testData.email);
    });

    await test.step('Accept Terms and Submit', async () => {

      await page.locator('#termsAccepted').check();

      const submitButton = page.getByRole('button', {
        name: 'Submit'
      });

      await expect(submitButton).toBeEnabled();

      await submitButton.click();

    });

  });

});