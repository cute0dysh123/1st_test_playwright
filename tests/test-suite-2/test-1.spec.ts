import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Tìm kiếm', { exact: true }).click();
  await page.fill('//textarea[@name="q"]', 'automation test');

  // Press Enter to submit the search form
  await page.press('//textarea[@name="q"]', 'Enter');

  // Wait for the results to load
  await page.waitForLoadState('networkidle');

  // Wait for the search results to appear
  await page.waitForSelector('//div[@id="center_col"]//h3[contains(text(), "Automation")]', { timeout: 5000 });

  // Get all search result links that contain 'automation test'
  const links = await page.$$('//div[@id="center_col"]//h3[contains(text(), "Automation")]');

  // Click on the first search result link
  if (links.length > 0) {
    await links[0].click();
    await page.waitForLoadState('networkidle');
  }
  await page.waitForLoadState("networkidle")
});