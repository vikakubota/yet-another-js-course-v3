import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Verify user can view product details', async ({ page }) => {
    await page.getByAltText('Combination Pliers').click();
    
    expect(page.url()).toContain('/product');
    await expect(page.getByTestId('product-name')).toHaveText('Combination Pliers');
    await expect(page.getByTestId('unit-price')).toHaveText('14.15');
    await expect(page.getByTestId('add-to-cart')).toBeVisible();
    await expect(page.getByTestId('add-to-cart')).toBeVisible();
});