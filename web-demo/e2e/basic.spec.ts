import { test, expect } from '@playwright/test';

test.describe('Basic App Functionality', () => {
  test('API server should be running', async ({ request }) => {
    const response = await request.get('http://localhost:3001/health');
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(data.status).toBe('ok');
  });

  test('Web app should be accessible', async ({ page }) => {
    const response = await page.goto('http://localhost:5173');
    expect(response?.status()).toBeLessThan(400);
  });

  test('API proxy should work through Vite', async ({ page }) => {
    // Start on the main page
    await page.goto('http://localhost:5173');
    
    // The app should make an API call to /api/packs
    const apiResponse = await page.waitForResponse(
      response => response.url().includes('/api/packs'),
      { timeout: 10000 }
    );
    
    expect(apiResponse.status()).toBe(200);
  });
});