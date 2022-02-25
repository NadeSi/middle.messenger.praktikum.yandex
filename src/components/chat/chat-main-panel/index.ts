import {Component} from '../../../modules/component';
import {ChatMainPanelHandlers, ChatMainPanelOuterProps, ChatMainPanelProps} from './chat-main-panel.model';
import template from './chat-main-panel.tmpl';

import MessagesTopPanelComponent from '../../messages/messages-top-panel';
import MessagesViewPanelComponent from '../../messages/messages-view-panel';
import MessageItemComponent from '../../messages/message-item';
import MessagesInputPanelComponent from '../../messages/messages-input-panel';
import InputComponent, {IInputType} from '../../common/input';
import isEqual from '../../../utils/helpers/isEqual';

import './chat-main-panel.scss';
import store from '../../../modules/store/store';

class ChatChatMainPanelComponent extends Component<ChatMainPanelProps> {
  handlers: ChatMainPanelHandlers = {};

  constructor(props: ChatMainPanelOuterProps, handlers: ChatMainPanelHandlers) {
    super('chat-main-panel', template, props);

    this.handlers = handlers;

    this.props.messagesTopPanel = new MessagesTopPanelComponent(
      {
        title: this.props.activeChat?.title || '',
        avatar: this.props.activeChat?.avatar || '',
      },
      {
        onClickHeader: () => this.handleClickChatHeader(),
      },
    );

    this.props.messagesViewPanel = new MessagesViewPanelComponent({
      messageList: this.props.activeChatContent || [],
    });

    this.props.messagesInputPanel = new MessagesInputPanelComponent(
      {},
      {
        onSendMessage: (e) => this.handlers.handleSendMessage && this.handlers.handleSendMessage(e),
      },
    );
  }

  componentDidUpdate(oldProps: ChatMainPanelProps, newProps: ChatMainPanelProps) {
    /**messages top panel*/
    if (oldProps.activeChat.title !== newProps.activeChat.title) {
      this.props.messagesTopPanel?.setProps({title: newProps.activeChat.title, avatar: newProps.activeChat.avatar});
    }

    /**messages view panel*/
    if (
      oldProps.activeChatContent &&
      newProps.activeChatContent &&
      !isEqual(oldProps.activeChatContent, newProps.activeChatContent)
    ) {
      this.props.messagesViewPanel?.setProps({messageList: newProps.activeChatContent});
    }

    return true;
  }

  handleClickChatHeader = () => {
    store.set('sidebarLeft', {
      ...store.getState().sidebarLeft,
      isVisible: true,
    });
  };
}

export default ChatChatMainPanelComponent;
