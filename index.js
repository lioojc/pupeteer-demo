const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 800,
    deviceScaleFactor: 3
  });
  await page.goto("https://www.so.com");
  const size = await page.$eval('body', el => {
    return {
      width: el.clientWidth,
      height: el.clientHeight
    }
  });

  const clip = {
    x: 0,
    y: 0,
    width: size.width,
    height: size.height
  };
  await page.screenshot({ type: 'png', clip: clip, path: 'screenshot.png' });
  await browser.close();
})();