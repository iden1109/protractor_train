import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

fdescribe('the user does search on angular.io', () => {

    it('should search "ngzone"', async () => {
        await browser.get('https://angular.io/');

        await element(by.tagName('input')).sendKeys('ngzone');
        browser.wait(EC.visibilityOf($('.search-results')), 5000);
        
        expect(await element(by.linkText('NgZone')).isDisplayed()).toBe(true);
    });
});
