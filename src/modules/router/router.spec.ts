import {expect} from 'chai';

import Router from './router';
import Block from '../block/block';
import jsdom from 'jsdom-global';
import xmldom from 'xmldom';
import sinon from 'sinon';

describe('Router', () => {
  before(function () {
    this.jsdom = jsdom(
      `<!DOCTYPE html>
                <body>
                    <div class="app"></div>
                </body>`,
      {url: 'http:localhost'},
    );

    const stringToElement = (str: string) => {
      const parser = new xmldom.DOMParser(),
        content = 'text/html',
        DOM = parser.parseFromString(str, content);

      return DOM.childNodes[0];
    };

    sinon.replace(Block, 'stringToElement', stringToElement);
  });

  after(function () {
    this.jsdom();
    sinon.restore();
  });

  function createPage() {
    return class TestPage extends Block {
      constructor() {
        super('test-page', `<div>Test page</div>`, {});
      }
    };
  }

  it('Переход на новую страницу должен менять состояние сущности history', () => {
    const router = new Router('.app');

    const page = createPage();

    router.use('/', page).use('/home', page).start();

    router.go('/');
    router.go('/home');

    expect(window.history.length).to.eq(3);
  });

  it('Проверка перехода по урлу', () => {
    const router = new Router('.app');

    const page = createPage();

    router.use('/', page).use('/home', page).start();

    router.go('/');
    expect(window.location.pathname).to.eq('/');

    router.go('/home');
    expect(window.location.pathname).to.eq('/home');
  });
});
