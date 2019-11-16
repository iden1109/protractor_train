import { browser, by, element, $, $$, ExpectedConditions as EC, ExpectedConditions } from 'protractor';

describe('test user login', () => {

    it('should open homepage', async () => {
        await browser.get('/');
        const url = await browser.getCurrentUrl();
        expect(url).toBe('http://localhost:4200/events');
    });

    it('should navigate to login page', async () => {
        const loginUrl = element(by.linkText('登入'));
        // const loginUrl = element(by.css('body > events-app > nav-bar > div > div > div.collapse.navbar-collapse > div > ul > li > a'));
        await loginUrl.click();
        const url = await browser.getCurrentUrl();
        expect(url).toContain('/user/login');
    });

    it('should login by John with right password', async () => {
        element(by.id('userName')).sendKeys('John');
        element(by.id('password')).sendKeys('123456');
        await element(by.buttonText('登入')).click();
        const url = await browser.getCurrentUrl();
        expect(url).toContain('/events');
    });
});
