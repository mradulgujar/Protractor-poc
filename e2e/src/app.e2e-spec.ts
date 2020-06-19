import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.title.getText()).toEqual('Automation Demo Site');
  });

  it('Verify the name entered in single frame', () => {
    expect(page.getSingleFrameInputText()).toEqual('Mradul');
  });

  it('Verify the name entered in iframe inside iframe', async () => {
    await browser.switchTo().defaultContent(); // move out of previous iframe
    await page.iframeInIframe.click();
    expect(page.getIframeInFrameInputText()).toEqual('Mradul');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
