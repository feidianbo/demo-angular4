import { DemoAngular4Page } from './app.po';

describe('demo-angular4 App', () => {
  let page: DemoAngular4Page;

  beforeEach(() => {
    page = new DemoAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
