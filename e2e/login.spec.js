import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.beforeEach(async ({ page }) => {
  await page.goto('/auth/login/');
});

test('user can log in with valid credentials', async ({ page }) => {
  await page.fill('input[name="email"]', process.env.ADMIN_EMAIL);
  await page.fill('input[name="password"]', process.env.ADMIN_PASSWORD);
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/');
});

test('user sees error message with invalid credentials', async ({ page }) => {
  await page.fill('input[name="email"]', 'wrong@example.com');
  await page.fill('input[name="password"]', 'wrongpassword');
  await page.click('button[type="submit"]');

  await expect(page.locator('#message-container')).toBeVisible();
});
