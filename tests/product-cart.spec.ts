import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.WEB_URL as string);
    await page.click('[data-test="product-01JR5X9HFW34R5EZ9D2SZ1H1GR"]');
});

test.describe('Verify user can add product to the cart', () => {
    test('Verify user can navigate to the product page', async ({ page }) => {
        
        await expect(page.locator('[data-test="product-name"]')).toHaveText('Slip Joint Pliers');
        await expect(page.locator('[data-test="unit-price"]')).toHaveText('9.17');
    });

    test('Verify user can add product to the cart', async ({ page }) => {
        await page.click('#btn-add-to-cart');
            
        await expect(page.locator('[aria-label="Product added to shopping cart."]')).toBeVisible();
        await expect(page.locator('[aria-label="Product added to shopping cart."]')).toHaveText('Product added to shopping cart.');
        await expect(page.locator('[aria-label="Product added to shopping cart."]')).toBeHidden({ timeout: 8000 });
        await expect(page.locator('#lblCartCount')).toHaveText('1');
    });
    
    test('Verify user can navigate to the checkout', async ({ page }) => {
        await page.click('#btn-add-to-cart');
        await page.click('#lblCartCount');

        await expect(page).toHaveURL(process.env.WEB_URL + '/checkout');
        await expect(page.locator('[type="number"]')).toHaveValue('1');
        await expect(page.locator('[data-test="product-title"]')).toHaveText('Slip Joint Pliers');
        await expect(page.locator('[data-test="proceed-1"]')).toBeVisible();
    
    });
});
