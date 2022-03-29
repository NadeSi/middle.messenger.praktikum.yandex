import {Component} from '../../../../modules/component';
import {ButtonIconProps, ButtonIconHandlers} from './button-icon.model';
import template from './button-icon.tmpl';

import './button-icon.scss';

class ButtonIconComponent extends Component<ButtonIconProps> {
  handlers: ButtonIconHandlers;

  constructor(props: ButtonIconProps, handlers: ButtonIconHandlers = {}) {
    super('button-icon', template, props);

    this.handlers = handlers;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: Event) {
    event.preventDefault();
    this.handlers.onClick && this.handlers.onClick(event);
  }

  afterRender = (parentElement: HTMLElement) => {
    const button: Element = parentElement?.getElementsByClassName('button-icon').namedItem(this.props.name) as Element;

    this.handleClick && button && button.addEventListener('click', this.handleClick.bind(this));
  };
}

export type {ButtonIconHandlers};
export default ButtonIconComponent;
