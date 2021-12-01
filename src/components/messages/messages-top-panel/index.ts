import {Component} from '../../../modules/component';
import {IMessagesTopPanelProps} from './messages-top-panel.model';
import template from './messages-top-panel.tmpl';

import './messages-top-panel.scss';

export class MessagesTopPanelComponent extends Component {
  constructor(props: IMessagesTopPanelProps) {
    super('messages-top-panel', template, props);
  }
}

export {IMessagesTopPanelProps};
export default MessagesTopPanelComponent;
