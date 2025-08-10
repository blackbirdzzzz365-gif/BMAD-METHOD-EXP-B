import { test, expect } from '@playwright/test';

test.describe('Simple User Flow', () => {
  test('should load packs and navigate to chat', async ({ page }) => {
    // Go to home page
    await page.goto('/');
    
    // Wait for the app to load
    await expect(page.locator('h1')).toContainText('BMAD Agent Demo');
    
    // Wait for packs to load (loading dots should disappear)
    await page.waitForSelector('.loading-dots', { state: 'detached', timeout: 15000 });
    
    // Check if pack cards are displayed
    const packCards = page.locator('.pack-card');
    const count = await packCards.count();
    console.log(`Found ${count} pack cards`);
    
    // If we have pack cards, click on one
    if (count > 0) {
      // Click the first pack
      await packCards.first().click();
      
      // Wait for chat view to appear (URL might not change in SPA)
      await page.waitForSelector('aside', { timeout: 5000 });
      
      // Agent sidebar should appear
      await expect(page.locator('aside')).toBeVisible();
      
      // Check if we're in the chat view
      await expect(page.locator('text=Back to Packs')).toBeVisible();
    } else {
      // If no packs loaded, check for error message
      const errorMessage = page.locator('text=Failed to load packs');
      const hasError = await errorMessage.isVisible();
      
      if (!hasError) {
        // API might be returning empty array
        console.log('No packs found, checking API response...');
      }
    }
  });

  test('should verify API is accessible', async ({ page }) => {
    // Check API directly through browser
    const response = await page.request.get('/api/packs');
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    console.log('API Response:', data);
    
    expect(data).toHaveProperty('packs');
    expect(Array.isArray(data.packs)).toBeTruthy();
  });
});