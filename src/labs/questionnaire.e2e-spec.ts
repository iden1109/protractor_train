import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('the user submit a questionnaire', () => {

    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
    });
    
    it('should apply a questionarire', async () => {
        await browser.get('http://localhost:4200/labs/questionnaire');
        await element(by.name('username')).sendKeys('iden');
        await element(by.name('codeLanguage')).sendKeys('java');
        await element(by.id('add')).click();
        const text = await element(by.tagName('form')).getText();
        await browser.waitForAngularEnabled(true);
        expect(text).toContain('送出成功');
    });

});
