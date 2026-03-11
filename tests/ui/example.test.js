import puppeteer from 'puppeteer';

describe('UI Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('should load the homepage', async () => {
        await page.goto('http://localhost:3000');
        const title = await page.title();
        expect(title).toBe('Expected Page Title');
    });

    test('should navigate to the about page', async () => {
        await page.goto('http://localhost:3000');
        await page.click('a[href="/about"]');
        const title = await page.title();
        expect(title).toBe('About Us');
    });

    // Add more UI tests as needed
});