import {test} from '@playwright/test';
test('DigiELV', async ({ page }) => {
await page.goto('https://digielv.mmcm.in/user-login');
await page.locator('[name="mob_no"]').fill('8976138209');
await page.locator('[name="password"]').fill('Mmcm@123');
await page.getByRole('link', {name: 'Register Here'}) .click(); 
await page.getByText('CD Buyer Registration').click();
await page.getByPlaceholder('Enter Your Pan No').fill('AALPG7411Q');
await page.getByRole('button', { name: 'Got it' }).click();
await page.getByPlaceholder('Enter Your Email').nth(0).fill('roshni.chaurasiya@mmcm.in');
await page.getByPlaceholder('Enter Your mobile number').fill('8935999999');
await page.getByRole('combobox', { name: 'Type to search Pincode' }).fill('401107')
await page.getByRole('listbox', { name: 'Option List' }).click();
await page.getByPlaceholder('Enter Your Address').fill('Address is mandatory and atleasr 30 character required or else cannot be register');
await page.getByLabel('Select a GST No').click();
await page.getByRole('listbox', { name: 'Option List' }).click();
await page.getByPlaceholder('Enter Your Name').nth(1).fill('Roshni Chaurasiya');
await page.getByPlaceholder('Please Enter 10-digit mobile number').fill('8935999999');
await page.getByPlaceholder('Enter Your Email').nth(1).fill('roshni.chaurasiya@mmcm.in');
await page.locator('#termsAccepted').check();
await page.getByRole('button', {name: 'Submit'}).click();
}); 

