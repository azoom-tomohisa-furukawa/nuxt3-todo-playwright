import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'To Do' })).toBeVisible();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('task1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('task2');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('task3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('li').filter({ hasText: 'task2' }).getByRole('button', { name: 'Delete'}).click();
  await page.getByRole('button', { name: 'Clear' }).click();
});