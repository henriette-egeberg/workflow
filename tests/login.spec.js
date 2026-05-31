import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/login/index.html');
});

test('user can log in with valid credentials', async ({ page }) => {
  await page.fill('input[name="email"]', process.env.ADMIN_EMAIL);
  await page.fill('input[name="password"]', process.env.ADMIN_PASSWORD);
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/login/index.html');
});

test('user sees error message with invalid credentials', async ({ page }) => {
  await page.fill('input[name="email"]', 'wrong@example.com');
  await page.fill('input[name="password"]', 'wrongpassword');
  await page.click('button[type="submit"]');

  await expect(page.locator('#message-container')).toBeVisible();
});
