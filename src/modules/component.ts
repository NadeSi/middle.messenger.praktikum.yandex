import Handlebars from 'handlebars';
import Block from './block/block';

export class Component<T extends Record<string, unknown> = any> extends Block<T> {
  constructor(componentName: string, template: string, props: T) {
    super(`${componentName}-component`, template, props);
  }

  render() {
    if (this.element) Handlebars.registerPartial(this.element.localName, this.template);
  }
}
