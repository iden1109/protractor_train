import { browser, by, element, $, $$, ExpectedConditions as EC, ElementFinder } from 'protractor';

describe('leave add new event page', () => {

    let cancelBtn: ElementFinder;

    beforeAll(async () => {
        await browser.get('/events/new');
    });

    beforeEach(() => {
        cancelBtn = element(by.buttonText('取消'));
    });

    it('should cancel the event', async () => {
        await cancelBtn.click();
        await browser.switchTo().alert().accept();
        expect(await browser.getCurrentUrl()).toContain('events');
    });
});
