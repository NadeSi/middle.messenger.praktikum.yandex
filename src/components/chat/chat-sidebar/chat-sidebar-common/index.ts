import {Component} from '../../../../modules/component';
import {ChatSidebarOuterProps, ChatSidebarProps} from './chat-sidebar.model';
import template from './chat-sidebar.tmpl';

import './chat-sidebar.scss';

class ChatSidebarComponent extends Component<ChatSidebarProps> {
  constructor(props: ChatSidebarOuterProps) {
    super('chat-sidebar', template, {
      ...props,
      _classNameActive: ChatSidebarComponent._getClassNameActive(props.isVisible),
    });
  }

  private static _getClassNameActive = (isVisible: ChatSidebarProps['isVisible']) => {
    return isVisible ? 'active' : '';
  };

  componentDidUpdate(oldProps: ChatSidebarProps, newProps: ChatSidebarProps) {
    if (oldProps.isVisible !== newProps.isVisible) {
      this.setProps({_classNameActive: ChatSidebarComponent._getClassNameActive(newProps.isVisible)});
    }

    return true;
  }
}

export type {ChatSidebarProps, ChatSidebarOuterProps};
export default ChatSidebarComponent;
