import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://azoom.jp/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '採用サイト' }).click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: '会社情報' }).first().click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: '代表挨拶' }).nth(1).click();
});