import {Component} from '../../../modules/component';
import {IChatItem} from './chat-item.model';
import template from './chat-item.tmpl';

import './chat-item.scss';

class ChatItemComponent extends Component {
  constructor(props: IChatItem) {
    super('chat-item', template, props);
  }
}

export default ChatItemComponent;
