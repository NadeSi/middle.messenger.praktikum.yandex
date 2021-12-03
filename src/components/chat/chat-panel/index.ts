import {Component} from '../../../modules/component';
import {IChatPanelProps} from './chat-panel.model';
import template from './chat-panel.tmpl';

import './chat-panel.scss';

class ChatPanelComponent extends Component {
  constructor(props: IChatPanelProps) {
    super('chat-panel', template, props);
  }
}

export default ChatPanelComponent;
