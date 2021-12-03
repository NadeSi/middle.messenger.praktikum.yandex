import {Component} from '../../../modules/component';
import {IMessagesTopPanelProps} from './messages-top-panel.model';
import template from './messages-top-panel.tmpl';

import './messages-top-panel.scss';

class MessagesTopPanelComponent extends Component {
  constructor(props: IMessagesTopPanelProps) {
    super('messages-top-panel', template, props);
  }
}

export default MessagesTopPanelComponent;
