import {Component} from '../../modules/component';
import {ILinkProps} from './link.model';
import template from './link.tmpl';

import './link.scss';

class LinkComponent extends Component {
  constructor(props: ILinkProps) {
    super('link', template, props);
  }
}

export default LinkComponent;
