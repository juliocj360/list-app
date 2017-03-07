import { ListAppPage } from './app.po';

describe('list-app App', () => {
  let page: ListAppPage;

  beforeEach(() => {
    page = new ListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
