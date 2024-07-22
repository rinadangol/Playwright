
import {test, expect} from '@playwright/test'

test('MobileTest', async({page})=>{
    await page.goto('https://playwright.dev/')
    await page.waitForTimeout(500)
    
    await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByLabel('Home page').click();
  await page.pause()
})