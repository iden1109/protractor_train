import { browser, by, element, $, $$, ExpectedConditions as EC, ElementFinder } from 'protractor';

describe('add a new user', () => {

    let userName: ElementFinder;
    let password: ElementFinder;
    let firstName: ElementFinder;
    let lastName: ElementFinder;
    let membershipterm: ElementFinder;
    let acceptBtn: ElementFinder;
    let addBtn: ElementFinder;

    beforeAll(async () => {
        await browser.get('/user/new');
    });

    beforeEach(() => {
        userName = element(by.id('username'));
        password = element(by.id('password'));
        firstName = element(by.id('firstName'));
        lastName = element(by.id('lastName'));
        membershipterm = element(by.id('membershipterm'));
        acceptBtn = element(by.id('accept'));
        addBtn = element(by.id('add'));
    });
    
    it('should add new one', async () => {
        await userName.sendKeys('mike');
        await password.sendKeys('123');
        await firstName.sendKeys('bob');
        await lastName.sendKeys('joe');
        await membershipterm.click();

        const handles = await browser.getAllWindowHandles();
        await browser.switchTo().window(handles[1]);

        await browser.waitForAngularEnabled(false);
        await browser.executeScript(() => {
            return window.scrollTo(0, document.body.scrollHeight);
        });

        const acceptBtnEC = EC.elementToBeClickable(acceptBtn);
        await browser.wait(acceptBtnEC, 5000);
        await acceptBtn.click();
        await browser.waitForAngularEnabled(true);

        await browser.switchTo().window(handles[0]);
        const addBtnEC = EC.elementToBeClickable(addBtn);
        await browser.wait(addBtnEC, 5000);
        await addBtn.click();

        expect(await browser.getCurrentUrl()).toContain('events');
    });
});
