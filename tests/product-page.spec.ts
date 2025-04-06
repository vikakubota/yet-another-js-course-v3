import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.WEB_URL as string);
});

test('Verify user can view product details', async ({ page }) => {
    await page.click('[data-test="product-01JR5X9HFPE2NNTNHPD9CB4PAR"]');

    expect(page.url()).toContain('/product');
    await expect(page.locator('[data-test="product-name"]')).toHaveText('Combination Pliers');
    await expect(page.locator('[data-test="unit-price"]')).toHaveText('14.15');
    await expect(page.locator('#btn-add-to-cart')).toBeVisible();
    await expect(page.locator('#btn-add-to-favorites')).toBeVisible();
});