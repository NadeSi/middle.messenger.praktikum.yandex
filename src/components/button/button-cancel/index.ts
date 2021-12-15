import {Component} from '../../../modules/component';
import {IButtonCancelProps, IButtonCancelHandlers} from './button-cancel.model';
import template from './button-cancel.tmpl';

import './button-cancel.scss';

class ButtonCancelComponent extends Component {
  handlers: IButtonCancelHandlers;

  constructor(props: IButtonCancelProps = {}, handlers: IButtonCancelHandlers) {
    super('button-cancel', template, props);

    this.handlers = handlers;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: Event) {
    event.preventDefault();
    this.handlers.onClick && this.handlers.onClick(event);
  }

  afterRender = (parentElement: HTMLElement) => {
    const buttonCancel: Element = parentElement?.getElementsByClassName('button-cancel')[0];

    this.handleClick && buttonCancel.addEventListener('click', this.handleClick.bind(this));
  };
}

export default ButtonCancelComponent;
