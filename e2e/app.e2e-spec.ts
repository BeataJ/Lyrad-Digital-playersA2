import { LyradDigitalPage } from './app.po';

describe('lyrad-digital App', function() {
  let page: LyradDigitalPage;

  beforeEach(() => {
    page = new LyradDigitalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
