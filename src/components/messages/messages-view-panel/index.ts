import {Component} from '../../../modules/component';
import {IMessagesViewPanelProps} from './messages-view-panel.model';
import template from './messages-view-panel.tmpl';

import './messages-view-panel.scss';

class MessagesViewPanelComponent extends Component {
  constructor(props: IMessagesViewPanelProps) {
    super('messages-view-panel', template, props);
  }
}

export default MessagesViewPanelComponent;
