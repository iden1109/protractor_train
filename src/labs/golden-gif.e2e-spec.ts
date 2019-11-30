import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot, addMask } from 'blue-harvest';

fdescribe('gif page present', () => {

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
            if (result.includes('successfully updated')) {
                console.log(result);
            }
        } catch (e) {
            console.log(e);
            expect(e).toBeFalsy();
        }
        expect().nothing();
    });
});
