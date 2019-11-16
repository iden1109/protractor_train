import { browser, logging, $, $$, by, element, ExpectedConditions as EC } from 'protractor';

describe('Vuejs', () => {

  const url = 'https://vuejs.org/';

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
  });

  it('should show Server-Side Rendering when input SSR in the search form', async () => {
    await browser.get(url);
    await element(by.id('search-query-nav')).sendKeys('SSR');
    await browser.sleep(1000);
    const serverSideRendering  = element(by.className('algolia-docsearch-suggestion--subcategory-column-text'));
    expect(await serverSideRendering.getText()).toEqual('Server-Side Rendering');
  });

});
