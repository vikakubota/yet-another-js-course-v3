import { test, expect } from '@playwright/test';

test('Verify login with valid user credentials', async ({ page }) => {
    await page.goto('/auth/login');
    await page.fill('#email', process.env.USER_EMAIL as string);
    await page.fill('#password', process.env.USER_PASSWORD as string);
    await page.click('input[type="submit"]');
  
    await expect(page).toHaveURL('/account');
    await expect(page.locator('h1')).toHaveText('My account');
    await expect(page.locator('#menu')).toHaveText(process.env.USER_NAME as string);
});