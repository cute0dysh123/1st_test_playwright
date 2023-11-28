const {test, expect}= require('@playwright/test');
test.use({video: 'on'});
test('Google', async ({page})=> {
    await page.goto('https://www.google.com');
    await page.fill('//textarea[@name="q"]','Automation Test')
    await page.press('//textarea[@name="q"]','Enter')
    await page.waitForLoadState('networkidle');

})