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
        await element(by.id('userName')).sendKeys('John');
        await element(by.id('password')).sendKeys('123456');
        await getLoginBtn().click();
        const url = await browser.getCurrentUrl();
        expect(url).toContain('/events');
    });

    it('should login fail by John with wrong password', async () => {
        await browser.get('/');
        await element(by.linkText('登入')).click();
        await element(by.id('userName')).sendKeys('John');
        await element(by.id('password')).sendKeys('abc');
        await getLoginBtn().click();
        const wrongMsg = element(by.className('alert-danger'));
        const msg = await wrongMsg.getText();
        expect(msg).toContain('錯誤的帳號密碼');
    });
});

function getLoginBtn() {
    return element(by.buttonText('登入'));
}

