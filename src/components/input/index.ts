import {Component} from '../../modules/component';
import {IInputProps} from './input.model';
import template from './input.tmpl';

import './input.scss';

export class InputComponent extends Component {
  constructor(props: IInputProps) {
    super('input', template, props);
  }
}

export {IInputType} from './input.model';
export {IInputProps};
export default InputComponent;
