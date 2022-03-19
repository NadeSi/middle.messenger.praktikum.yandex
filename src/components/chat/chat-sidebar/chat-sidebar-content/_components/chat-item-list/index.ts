import {Component} from '../../../../../../modules/component';
import {ChatItemListProps, ChatItemListOuterProps, ChatItemListHandlers} from './chat-item-list.model';
import template from './chat-item-list.tmpl';

import isEqual from '../../../../../../utils/helpers/isEqual';
import ChatItemComponent from '../chat-item';

import './chat-item-list.scss';

class ChatItemListComponent extends Component<ChatItemListProps> {
  handlers: ChatItemListHandlers;

  constructor(props: ChatItemListOuterProps, handlers: ChatItemListHandlers = {}) {
    super('chat-item-list', template, {...props, chatItemList: []});

    this.handlers = handlers;
  }

  componentDidUpdate(oldProps: ChatItemListProps, newProps: ChatItemListProps) {
    if (!isEqual(oldProps.list, newProps.list)) {
      this.setProps({
        chatItemList: (newProps.list || []).map(
          (item) =>
            new ChatItemComponent(item, {
              onClickChatItem: this.handlers.onClickChatItem,
              onClickDeleteItem: this.handlers.onClickDeleteItem,
            }),
        ),
      });
    }
    return true;
  }
}

export type {ChatItemListOuterProps as ChatItemListProps, ChatItemListHandlers};
export default ChatItemListComponent;
