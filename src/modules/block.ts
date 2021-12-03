import Handlebars from 'handlebars';
import EventBus from './event-bus';

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

  componentDidMount(oldProps?: any) {
    //
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps = (nextProps: Meta<T>['props']) => {
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

  _render() {
    const block = this.render();
    if (block) {
      this._element?.insertAdjacentHTML('beforeend', block);

      this.afterRender();
    }
  }

  render(): string | void {
    const templateScript = Handlebars.compile(this._meta.template);
    return templateScript(this.props);
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
        target[prop] = value;

        this.eventBus().emit(EVENTS.FLOW_CDU, {...target}, target);
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

  afterRender(parentElement?: HTMLElement) {
    for (const propKey in this.props) {
      if (this.props[propKey] instanceof Block) {
        (this.props[propKey] as Block).afterRender(parentElement || (this.element as HTMLElement));
      }
    }
  }
}
