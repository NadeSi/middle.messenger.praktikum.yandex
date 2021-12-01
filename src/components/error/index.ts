import {Component} from '../../modules/component';
import {IErrorProps} from './error.model';
import template from './error.tmpl';

import './error.scss';

export class ErrorComponent extends Component {
  constructor(props: IErrorProps) {
    super('error', template, props);
  }
}

export {IErrorProps};
export default ErrorComponent;
