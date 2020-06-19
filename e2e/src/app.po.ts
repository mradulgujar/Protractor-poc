import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.driver.get(browser.baseUrl);
  }

  get title(): ElementFinder {
    return element(by.css('.container .row div h1'));
  }

  get input(): ElementFinder {
    return element(by.css('div.container div.row input'));
  }

  get iframeInIframe(): ElementFinder {
    return element(by.linkText('Iframe with in an Iframe'));
  }

  async getSingleFrameInputText(): Promise<string> {
    const iframe = await browser.element.all(by.css('iframe#Singleframe'));
    await browser.switchTo().frame(0);
    this.input.sendKeys('Mradul');
    return this.input.getAttribute('value');
  }

  async getIframeInFrameInputText(): Promise<string> {
    // find outer frame
    const outerFrame = await browser.element.all(by.css('div#Multiple iframe'));
    //  switch to outer frame
    await browser.switchTo().frame(outerFrame[0].getWebElement());
    // find inner frame
    const innerFrame = await browser.element.all(by.tagName('iframe'));
    // switch to inner frame
    await browser.switchTo().frame(innerFrame[0].getWebElement());
    this.input.sendKeys('Mradul');
    return this.input.getAttribute('value');
  }
}
