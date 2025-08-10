import { test, expect } from '@playwright/test';

test.describe('Visualization Features', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to agent chat
    await page.goto('/');
    await page.waitForSelector('.pack-card');
    await page.click('text=Problem Solver');
    await page.click('.agent-card');
    await page.waitForSelector('.chat-input');
  });

  test('should render Mermaid diagrams', async ({ page }) => {
    // Mock a response with Mermaid diagram
    await page.evaluate(() => {
      // Inject mock message with Mermaid content
      const mockMessage = {
        type: 'agent',
        content: 'Here is the system diagram:',
        metadata: {
          visualization: {
            type: 'mermaid',
            content: `graph TD
              A[Start] --> B{Decision}
              B -->|Yes| C[Process]
              B -->|No| D[End]
              C --> D`
          }
        }
      };
      
      // Trigger visualization rendering
      window.dispatchEvent(new CustomEvent('mock-message', { detail: mockMessage }));
    });
    
    // Check if Mermaid container is rendered
    await expect(page.locator('.mermaid-diagram')).toBeVisible({ timeout: 5000 });
  });

  test('should render ASCII art', async ({ page }) => {
    // Test ASCII art rendering
    await page.evaluate(() => {
      const mockMessage = {
        type: 'agent',
        content: 'System architecture:',
        metadata: {
          visualization: {
            type: 'ascii-art',
            content: `
    ┌─────────────┐     ┌─────────────┐
    │   Client    │────▶│   Server    │
    └─────────────┘     └─────────────┘
           │                    │
           ▼                    ▼
    ┌─────────────┐     ┌─────────────┐
    │  Database   │     │    Cache    │
    └─────────────┘     └─────────────┘`
          }
        }
      };
      
      window.dispatchEvent(new CustomEvent('mock-message', { detail: mockMessage }));
    });
    
    await expect(page.locator('.ascii-art')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('pre')).toContainText('Client');
  });

  test('should render tables', async ({ page }) => {
    await page.evaluate(() => {
      const mockMessage = {
        type: 'agent',
        content: 'Analysis results:',
        metadata: {
          visualization: {
            type: 'table',
            content: {
              headers: ['Option', 'Pros', 'Cons', 'Score'],
              rows: [
                ['Option A', 'Fast, Cheap', 'Less features', '7/10'],
                ['Option B', 'Full features', 'Expensive, Slow', '8/10'],
                ['Option C', 'Balanced', 'Moderate everything', '9/10']
              ]
            }
          }
        }
      };
      
      window.dispatchEvent(new CustomEvent('mock-message', { detail: mockMessage }));
    });
    
    await expect(page.locator('table')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('th')).toContainText('Option');
    await expect(page.locator('td')).toContainText('Option A');
  });

  test('should handle visualization errors gracefully', async ({ page }) => {
    await page.evaluate(() => {
      const mockMessage = {
        type: 'agent',
        content: 'Visualization failed',
        metadata: {
          visualization: {
            type: 'mermaid',
            content: 'invalid mermaid syntax !!!'
          }
        }
      };
      
      window.dispatchEvent(new CustomEvent('mock-message', { detail: mockMessage }));
    });
    
    // Should show error state
    await expect(page.locator('.visualization-error')).toBeVisible({ timeout: 5000 });
  });

  test('should support copy functionality for visualizations', async ({ page }) => {
    // Create a visualization
    await page.evaluate(() => {
      const mockMessage = {
        type: 'agent',
        content: 'Code example:',
        metadata: {
          visualization: {
            type: 'code',
            language: 'javascript',
            content: 'console.log("Hello, World!");'
          }
        }
      };
      
      window.dispatchEvent(new CustomEvent('mock-message', { detail: mockMessage }));
    });
    
    // Look for copy button
    await expect(page.locator('.copy-button')).toBeVisible({ timeout: 5000 });
    
    // Click copy button
    await page.click('.copy-button');
    
    // Check if copied indicator shows
    await expect(page.locator('text=Copied!')).toBeVisible();
  });
});