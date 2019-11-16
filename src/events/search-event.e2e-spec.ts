import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('search a event', () => {

    beforeEach(async () => {
        await browser.waitForAngularEnabled(true);
    });

    it('should open activity page', async () => {
        await browser.get('/events');
        const url = await browser.getCurrentUrl();
        expect(url).toContain('/events');
    });

    it('should return 3 records when search "Angular"', async () => {
        await element(by.name('searchTerm')).sendKeys('Angular');
        await element(by.buttonText('搜尋')).click();
        const groupItems = element.all(by.className('list-group-item'));
        const resultCount = await groupItems.count();
        expect(resultCount).toEqual(3);
    });

    it('should show "ANGULAR 7 開發實戰" when click item ANGULAR 開發實戰', async () => {
        await element(by.linkText('Angular 實戰開發')).click();
        const title = await element(by.tagName('h2')).getText();
        expect(title).toContain('ANGULAR 7 開發實戰：新手入門篇');
    });
});

