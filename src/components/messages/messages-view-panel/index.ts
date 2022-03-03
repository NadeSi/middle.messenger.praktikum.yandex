import {Component} from '../../../modules/component';
import {MessagesViewPanelOuterProps, MessagesViewPanelProps} from './messages-view-panel.model';
import template from './messages-view-panel.tmpl';

import MessageItemComponent from '../message-item';
import isEqual from '../../../utils/helpers/isEqual';

import './messages-view-panel.scss';

class MessagesViewPanelComponent extends Component<MessagesViewPanelProps> {
  constructor(props: MessagesViewPanelOuterProps) {
    super('messages-view-panel', template, props);
  }

  afterRender = (parentElement: HTMLElement) => {
    const viewPanelElement = document.getElementById('messages-view-panel');
    if (viewPanelElement) {
      viewPanelElement.scrollTop = viewPanelElement.scrollHeight;
    }
  };

  componentDidUpdate(oldProps: MessagesViewPanelProps, newProps: MessagesViewPanelProps) {
    if (oldProps.messageList && newProps.messageList && !isEqual(oldProps.messageList, newProps.messageList)) {
      this.setProps({messageItemList: newProps.messageList.map((item) => new MessageItemComponent(item))});
    }

    return true;
  }
}

export {MessagesViewPanelOuterProps as MessagesViewPanelProps};
export default MessagesViewPanelComponent;
