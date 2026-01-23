const { test, expect } = require('@playwright/test');

test('homepage responds and shows content', async ({ page }) => {
  const response = await page.goto('http://localhost:8080', { waitUntil: 'domcontentloaded' });
  // Ensure the server responded with a successful status
  expect(response && response.status()).toBeLessThan(400);

  // Basic DOM check: body is present and has some content
  await expect(page.locator('body')).toBeVisible();
});
