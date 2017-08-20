import { SunriderBlogPage } from './app.po';

describe('sunrider-blog App', () => {
  let page: SunriderBlogPage;

  beforeEach(() => {
    page = new SunriderBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
