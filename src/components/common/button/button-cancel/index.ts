import {Component} from '../../../../modules/component';
import {ButtonCancelProps, ButtonCancelHandlers} from './button-cancel.model';
import template from './button-cancel.tmpl';

import ButtonIconComponent from '../button-icon';

import './button-cancel.scss';

//TODO достаточно оставить ButtonIconComponent если используется в одном месте
class ButtonCancelComponent extends Component<ButtonCancelProps> {
  handlers: ButtonCancelHandlers;

  constructor(props = {}, handlers: ButtonCancelHandlers) {
    super('button-cancel', template, {
      ...props,
      buttonCancel: new ButtonIconComponent(
        {
          name: 'button-cancel',
          icon: 'icon-back',
        },
        {
          onClick: (e) => this.handlers.onClick && this.handlers.onClick(e),
        },
      ),
    });

    this.handlers = handlers;
  }
}

export default ButtonCancelComponent;
