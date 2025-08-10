import { test, expect } from '@playwright/test';

test.describe('Pack Discovery', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check if the app title is present
    await expect(page.locator('h1')).toContainText('BMAD Method');
  });

  test('should discover and display expansion packs', async ({ page }) => {
    await page.goto('/');
    
    // Wait for packs to load
    await page.waitForSelector('.pack-card', { timeout: 10000 });
    
    // Check if packs are displayed
    const packCards = page.locator('.pack-card');
    await expect(packCards).toHaveCount(6); // We have 6 packs
    
    // Check if specific packs are present
    await expect(page.locator('text=Problem Solver')).toBeVisible();
    await expect(page.locator('text=Market Research')).toBeVisible();
    await expect(page.locator('text=Product Management')).toBeVisible();
  });

  test('should show pack details on hover', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.pack-card');
    
    // Hover over the first pack card
    const firstPack = page.locator('.pack-card').first();
    await firstPack.hover();
    
    // Check if description is visible
    const description = firstPack.locator('.pack-description');
    await expect(description).toBeVisible();
  });

  test('should navigate to pack chat when clicking on a pack', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.pack-card');
    
    // Click on the Problem Solver pack
    await page.click('text=Problem Solver');
    
    // Should navigate to the chat page
    await expect(page).toHaveURL(/.*pack=bmad-problem-solver/);
    
    // Agent sidebar should be visible
    await expect(page.locator('aside')).toBeVisible();
    await expect(page.locator('text=Problem Solver Pack')).toBeVisible();
  });

  test('should handle API errors gracefully', async ({ page, context }) => {
    // Intercept API calls and return error
    await context.route('**/api/packs', (route) => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          error: { code: 'SERVER_ERROR', message: 'Internal server error' }
        })
      });
    });
    
    await page.goto('/');
    
    // Should show error message
    await expect(page.locator('text=Failed to load packs')).toBeVisible({ timeout: 5000 });
  });
});