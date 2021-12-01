import {Component} from '../../../modules/component';
import {IButtonCancelProps, IButtonCancelHandlers} from './button-cancel.model';
import template from './button-cancel.tmpl';

import './button-cancel.scss';

class ButtonCancelComponent extends Component {
  handlers: IButtonCancelHandlers;

  constructor(props: IButtonCancelProps = {}, IButtonCancelHandlers = {}) {
    super('button-cancel', template, props);

    this.handlers = IButtonCancelHandlers;
  }
}

export {IButtonCancelProps};
export default ButtonCancelComponent;
