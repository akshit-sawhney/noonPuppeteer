const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://testui.non.sa/#/header/payment/12',  {
    waitUntil: 'networkidle2'
});
    await page.click('.toggle-item--login')

    await page.click('.new-form-control');

    await page.type('.new-form-control', 'yes@yes.yes', {delay: 100});
      await page.click('.payment-toggle__option--card', {delay: 2000})
      await page.click('.gradient-button');
      await page.waitForNavigation({waitUntil: 'load'});
  await page.screenshot({path: 'example.png'});

})();