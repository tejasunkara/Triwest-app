import { TriwestAppPage } from './app.po';

describe('triwest-app App', () => {
  let page: TriwestAppPage;

  beforeEach(() => {
    page = new TriwestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
