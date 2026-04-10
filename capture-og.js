const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    
    // Load the HTML file
    await page.goto(`file://${path.join(__dirname, 'public/og-template.html')}`, {
      waitUntil: 'networkidle0'
    });
    
    // Wait a bit for fonts to load
    await page.waitForTimeout(1000);
    
    // Take screenshot
    await page.screenshot({
      path: 'public/og-image.png',
      type: 'png'
    });
    
    await browser.close();
    console.log('OG image created successfully!');
  } catch (error) {
    console.error('Error creating OG image:', error);
    process.exit(1);
  }
})();