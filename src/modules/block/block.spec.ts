import {expect} from 'chai';
import jsdom from 'jsdom-global';
import sinon from 'sinon';
import xmldom from 'xmldom';

import Block from '../block/block';

const index = `<!DOCTYPE html>
                <body>
                    <div class="app"></div>
                </body>`;

describe('Block', () => {
  before(function () {
    this.jsdom = jsdom(index, {url: 'http:localhost'});

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

  function createPage(template: string, props = {}) {
    class TestPage extends Block {
      constructor() {
        super('test-page', template, props);
      }
    }
    return new TestPage();
  }

  it('Проверка рендера', () => {
    const expectedResult = `<div class="test">test</div>`;
    const block = createPage(expectedResult);

    expect(block.render()).to.eq(expectedResult);
  });

  it('Проверка обновления пропсов и ререндер страницы', () => {
    const expectedResult = `<div class="test">test</div>`;
    const block = createPage(expectedResult, {name: 'name1'});

    const root = document.querySelector('.app');

    const html = block.render() as string;
    if (root) {
      root.innerHTML = html;
    }

    const renderSpy = sinon.spy(block, 'render');

    block.setProps({name: 'name2'});
    expect(block.props.name).to.eq('name2');
    expect(renderSpy.calledOnce).to.eq(true);

    block.setProps({name: 'name3'});
    expect(block.props.name).to.eq('name3');
    expect(renderSpy.calledTwice).to.eq(true);
  });
});
