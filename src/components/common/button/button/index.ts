import {Component} from '../../../../modules/component';
import {ButtonProps, ButtonHandlers} from './button.model';
import template from './button.tmpl';

import './button.scss';

class ButtonComponent extends Component<ButtonProps> {
  handlers: ButtonHandlers;

  constructor(props: ButtonProps, handlers: ButtonHandlers = {}) {
    super('button', template, props);

    this.handlers = handlers;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: Event) {
    event.preventDefault();
    this.handlers.onClick && this.handlers.onClick(event);
  }

  afterRender = (parentElement: HTMLElement) => {
    const button: Element = parentElement?.getElementsByClassName('button').namedItem(this.props.name) as Element;

    this.handleClick && button && button.addEventListener('click', this.handleClick.bind(this));
  };
}

export {ButtonHandlers};
export default ButtonComponent;
