import Handlebars from 'handlebars';
import EventBus from '../event-bus';

type Meta<T extends Record<string, unknown>> = {
  tagName: string;
  template: string;
  props: T;
};

enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

export default abstract class Block<T extends Record<string, unknown> = any> {
  _element: HTMLElement | null = null;
  readonly _meta: Meta<T>;
  eventBus: () => EventBus;
  props: Meta<T>['props'];

  protected constructor(
    tagName: Meta<T>['tagName'] = 'div',
    template: Meta<T>['template'] = '',
    props: Meta<T>['props'],
  ) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      template,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const {tagName} = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps?: Meta<T>['props']) {
    //
  }

  _componentDidUpdate(oldProps: Meta<T>['props'], newProps: Meta<T>['props']) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._rerender();
  }

  componentDidUpdate(oldProps: Meta<T>['props'], newProps: Meta<T>['props']) {
    return true;
  }

  setProps = (nextProps: Partial<T>) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  get template() {
    return this._meta.template;
  }

  _rerender() {
    this._render(true);
  }

  _render(isRerender = false) {
    this._registerHelpers();

    const block = this.render();
    if (block) {
      if (isRerender) this._element?.replaceChildren(Block.stringToElement(block));
      else this._element?.insertAdjacentHTML('beforeend', block);

      this._afterRender();
    }
  }

  render(): string | void {
    const templateScript = Handlebars.compile(this._meta.template);
    return templateScript(this.props);
  }

  _registerHelpers() {
    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
      return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    });
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy = (props: Meta<T>['props']) => {
    return new Proxy(props, {
      get: (target, prop: keyof T & string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: keyof T & string, value) => {
        const oldTarget = {...target};
        target[prop] = value;

        this.eventBus().emit(EVENTS.FLOW_CDU, {...oldTarget}, target);
        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет доступа');
      },
    });
  };

  _createDocumentElement(tagName: Meta<T>['tagName']) {
    return document.createElement(tagName);
  }

  show() {
    const element = this.getContent();
    if (element) {
      element.style.display = 'block';
    }
  }

  hide() {
    const element = this.getContent();
    if (element) {
      element.style.display = 'none';
    }
  }

  _afterRender(parentElement?: HTMLElement) {
    this.afterRender(parentElement);

    const childAfterRender = (child: T[Extract<keyof T, string>]) => {
      if (child instanceof Block) {
        (child as Block)._afterRender(parentElement || (this.element as HTMLElement));
      }
    };

    for (const propKey in this.props) {
      const child = this.props[propKey];

      if (Array.isArray(child)) {
        child.forEach((item) => childAfterRender(item));
      } else {
        childAfterRender(child);
      }
    }
  }

  afterRender(parentElement?: HTMLElement) {
    //
  }

  static stringToElement(str: string) {
    const parser = new DOMParser(),
      content = 'text/html',
      DOM = parser.parseFromString(str, content);

    return DOM.body.childNodes[0];
  }
}
