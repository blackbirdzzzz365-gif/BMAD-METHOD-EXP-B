import { test, expect } from '@playwright/test';

test.describe('Agent Chat', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Problem Solver pack
    await page.goto('/');
    await page.waitForSelector('.pack-card');
    await page.click('text=Problem Solver');
    await page.waitForSelector('aside'); // Wait for agent sidebar
  });

  test('should display agents in the sidebar', async ({ page }) => {
    // Check if agents are listed
    const agentList = page.locator('.agent-list');
    await expect(agentList).toBeVisible();
    
    // Should have at least one agent
    const agents = page.locator('.agent-card');
    await expect(agents).toHaveCount(1); // Based on mock data
    
    // Check agent details
    await expect(page.locator('text=Dr. Sarah Chen')).toBeVisible();
    await expect(page.locator('text=Systems Thinking Expert')).toBeVisible();
  });

  test('should activate an agent when clicked', async ({ page }) => {
    // Click on an agent
    await page.click('.agent-card');
    
    // Check if agent is activated
    await expect(page.locator('.agent-avatar')).toBeVisible();
    await expect(page.locator('text=Dr. Sarah Chen')).toBeVisible();
    
    // Check if welcome message appears
    await expect(page.locator('.chat-message')).toBeVisible({ timeout: 5000 });
  });

  test('should send and receive messages', async ({ page }) => {
    // Activate an agent first
    await page.click('.agent-card');
    await page.waitForSelector('.chat-input');
    
    // Type a message
    const input = page.locator('.chat-input input');
    await input.fill('Hello, can you help me understand this system?');
    await input.press('Enter');
    
    // Check if user message appears
    await expect(page.locator('text=Hello, can you help me understand this system?')).toBeVisible();
    
    // Wait for agent response (mocked)
    await expect(page.locator('.chat-message').nth(1)).toBeVisible({ timeout: 10000 });
  });

  test('should show agent status when thinking', async ({ page }) => {
    // Activate an agent
    await page.click('.agent-card');
    await page.waitForSelector('.chat-input');
    
    // Send a message
    const input = page.locator('.chat-input input');
    await input.fill('/map-system complex business process');
    await input.press('Enter');
    
    // Check if status indicator shows
    await expect(page.locator('text=thinking')).toBeVisible({ timeout: 2000 });
  });

  test('should display visualization outputs', async ({ page, context }) => {
    // Mock WebSocket to return visualization
    await context.route('**/ws', (route) => {
      // WebSocket handling would be more complex in real tests
      route.fulfill();
    });
    
    // Activate agent and send command
    await page.click('.agent-card');
    await page.waitForSelector('.chat-input');
    
    const input = page.locator('.chat-input input');
    await input.fill('/find-loops');
    await input.press('Enter');
    
    // Check for visualization container
    await expect(page.locator('.visualization-container')).toBeVisible({ timeout: 10000 });
  });

  test('should handle multiple agents', async ({ page }) => {
    // This test would work with actual multi-agent packs
    // For now, we'll test the UI capability
    
    // Check if agent list allows selection
    const agentCards = page.locator('.agent-card');
    const firstAgent = agentCards.first();
    
    await firstAgent.click();
    await expect(firstAgent).toHaveClass(/selected/);
  });

  test('should persist session on reload', async ({ page }) => {
    // Activate agent and send message
    await page.click('.agent-card');
    await page.waitForSelector('.chat-input');
    
    const input = page.locator('.chat-input input');
    await input.fill('Test message');
    await input.press('Enter');
    
    // Reload page
    await page.reload();
    
    // Check if session is restored
    await expect(page.locator('text=Test message')).toBeVisible();
  });

  test('should handle keyboard shortcuts', async ({ page }) => {
    await page.click('.agent-card');
    await page.waitForSelector('.chat-input');
    
    // Test focus shortcut (usually Cmd/Ctrl + K)
    await page.keyboard.press('Control+k');
    
    const input = page.locator('.chat-input input');
    await expect(input).toBeFocused();
  });
});