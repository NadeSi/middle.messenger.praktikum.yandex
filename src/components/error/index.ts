import {Component} from '../../modules/component';
import {IErrorProps} from './error.model';
import template from './error.tmpl';

import './error.scss';

class ErrorComponent extends Component {
  constructor(props: IErrorProps) {
    super('error', template, props);
  }
}

export default ErrorComponent;
