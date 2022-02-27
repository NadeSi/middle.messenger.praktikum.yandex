import {Component} from '../../modules/component';
import {IErrorProps} from './error.model';
import template from './error.tmpl';

import './error.scss';
import LinkComponent from '../common/link';
import AppRoutes from '../../utils/app-router/app-routes';

class ErrorComponent extends Component {
  constructor(props: IErrorProps) {
    super('error', template, {
      link: new LinkComponent({text: 'Назад к чатам', href: AppRoutes.MESSENGER}),
      ...props,
    });
  }
}

export default ErrorComponent;
