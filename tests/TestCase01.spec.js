// @ts-check
const { test, expect } = require('@playwright/test');

test('get started link', async ({ page }) => {

    await page.goto('https://oyster-app-xnc8n.ondigitalocean.app/');
    await page.getByRole('link', { name: 'Log In »' }).click();
    await page.locator('#id_username').fill('Upwork');
    await page.locator('form div').filter({ hasText: 'Password' }).click();
    await page.locator('#id_password').fill('a%g25U@L2onlDb!37t');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'AMTSO files' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'CEPlus-Android.apk' }).click();
    const download = await downloadPromise;
    const download1Promise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'PotentiallyUnwanted.exe' }).click();
    const download1 = await download1Promise;
    await page.getByRole('link', { name: 'Browser Test' }).click();
});
