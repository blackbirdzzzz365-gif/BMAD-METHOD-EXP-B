import { test, expect } from '@playwright/test';

test.describe('API Integration', () => {
  test('should successfully call pack discovery API', async ({ page, request }) => {
    // Direct API test
    const response = await request.get('http://localhost:3001/api/packs');
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.packs).toHaveLength(6);
    
    // Verify pack structure
    const firstPack = data.packs[0];
    expect(firstPack).toHaveProperty('id');
    expect(firstPack).toHaveProperty('config');
    expect(firstPack).toHaveProperty('loaded');
  });

  test('should load specific pack details', async ({ request }) => {
    const response = await request.get('http://localhost:3001/api/packs/bmad-problem-solver');
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.pack).toHaveProperty('agents');
    expect(data.pack).toHaveProperty('tasks');
    expect(data.pack).toHaveProperty('templates');
  });

  test('should handle WebSocket connection', async ({ page }) => {
    await page.goto('/');
    
    // Monitor WebSocket connections
    const wsPromise = page.waitForEvent('websocket');
    
    // Navigate to chat to trigger WebSocket connection
    await page.click('.pack-card');
    await page.click('.agent-card');
    
    const ws = await wsPromise;
    expect(ws.url()).toContain('ws://localhost');
  });

  test('should proxy API calls through Vite dev server', async ({ page }) => {
    await page.goto('/');
    
    // Monitor network requests
    const apiResponse = page.waitForResponse((response) => 
      response.url().includes('/api/packs') && response.status() === 200
    );
    
    // This should trigger API call
    await page.reload();
    
    const response = await apiResponse;
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.success).toBe(true);
  });

  test('should handle CORS properly', async ({ request }) => {
    const response = await request.get('http://localhost:3001/api/packs', {
      headers: {
        'Origin': 'http://localhost:5173'
      }
    });
    
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['access-control-allow-origin']).toBe('*');
  });
});