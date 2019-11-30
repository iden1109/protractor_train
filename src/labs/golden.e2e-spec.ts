import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot } from 'blue-harvest';

describe('main page present', () => {
    
    it('should compare pages', async () => {
        await browser.get('/');
        await browser.manage().window().setSize(1366, 1024);
        const golden = 'e2e/goldens/home.png';
        const diffDir = 'e2e/goldens/diff/'; // 會產生 diff-home.png
        await browser.waitForAngular(); // 截圖前一定要 wait
        const actual = await browser.takeScreenshot();
        try {
            const result = await compareScreenshot(actual, golden, diffDir);
            expect(result).toBeTruthy();
        } catch (e) {
            expect(e).toBeFalsy('首頁 / 比對版面錯誤');
        }
    });
});
