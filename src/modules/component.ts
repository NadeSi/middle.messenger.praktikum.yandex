import Handlebars from 'handlebars';
import Block from './block';

export class Component extends Block {
  constructor(componentName: string, template: string, props: any) {
    super(`${componentName}-component`, template, props);
  }

  render() {
    if (this.element) Handlebars.registerPartial(this.element.localName, this.template);
  }
}
