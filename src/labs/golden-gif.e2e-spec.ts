import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot, addMask } from 'blue-harvest';

describe('gif page present', () => {

    it('should compare gif lab page', async () => {
        await browser.get('/labs/gif');
        await browser.manage().window().setSize(1366, 1024);
        const golden = 'e2e/goldens/giflab.png';
        const diffDir = 'e2e/goldens/diff/';
        const gif_img = element(by.id('gif-img'));
        await addMask(gif_img, 'gray');
        const actual = await browser.takeScreenshot();
        try {
            const result = await compareScreenshot(actual, golden, diffDir);
            expect(result).toBeTruthy();
        } catch (e) {
            expect(e).toBeFalsy('首頁 / 比對版面錯誤');
        }
    });
});
