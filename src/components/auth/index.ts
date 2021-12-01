import {Component} from '../../modules/component';
import {IAuthProps} from './auth.model';
import template from './auth.tmpl';

import './auth.scss';

class AuthComponent extends Component {
  constructor(props: IAuthProps) {
    super('auth', template, props);
  }
}

export default AuthComponent;
