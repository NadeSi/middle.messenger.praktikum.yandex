import {Component} from '../../../../../modules/component';
import {
  ChatListViewPanelHandlers,
  ChatListViewPanelOuterProps,
  ChatListViewPanelProps,
} from './chat-list-view-panel.model';
import template from './chat-list-view-panel.tmpl';

import ButtonIconComponent from '../../../../common/button/button-icon';
import Router from '../../../../../modules/router/router';
import AppRoutes from '../../../../../utils/app-router/app-routes';
import InputComponent from '../../../../common/input';
import {IInputType} from '../../../../common/input/input.model';
import isEqual from '../../../../../utils/helpers/isEqual';
import store from '../../../../../modules/store/store';
import {ChatItem} from '../../../../../models/chat';
import {ChatsController} from '../../../../../controllers/chats';
import ChatItemListComponent from '../_components/chat-item-list';
import ChatAddButtonComponent from '../_components/chat-add-button';

import './chat-list-view-panel.scss';

class ChatListViewPanelComponent extends Component<ChatListViewPanelProps> {
  router = Router.getInstance();
  handlers: ChatListViewPanelHandlers;

  constructor(props: ChatListViewPanelOuterProps = {}, handlers: ChatListViewPanelHandlers) {
    super('chat-list-view-panel', template, {
      ...props,
      buttonProfile: new ButtonIconComponent(
        {
          name: 'button-profile',
          className: 'button-profile',
          icon: 'icon-profile',
        },
        {
          onClick: (e) => this.handleClickProfile(e),
        },
      ),
      inputSearch: new InputComponent({
        name: 'input-search-chats',
        type: IInputType.text,
        placeholder: 'Поиск',
        value: '',
      }),
      buttonSearchChats: new ButtonIconComponent(
        {
          name: 'button-search-chats',
          className: 'button-search-chats',
          icon: 'icon-search',
        },
        {
          onClick: (e) => {
            this.handleSearchChats(e);
          },
        },
      ),
      chatItemList: new ChatItemListComponent(
        {
          list: [],
        },
        {
          onClickChatItem: (e) => this.handleSetActiveChat(e),
        },
      ),
      chatAddButton: new ChatAddButtonComponent(
        {
          name: 'button-show-new-chat',
        },
        {
          onClick: (e) => this.handlers.onShowAddChatPanel && this.handlers.onShowAddChatPanel(e),
        },
      ),
    });

    this.handlers = handlers;
    this.handleClickProfile = this.handleClickProfile.bind(this);
    this.handleSearchChats = this.handleSearchChats.bind(this);
    this.handleSetActiveChat = this.handleSetActiveChat.bind(this);
  }

  componentDidUpdate(oldProps: ChatListViewPanelProps, newProps: ChatListViewPanelProps) {
    if (!isEqual(oldProps.chatList, newProps.chatList)) {
      this.props.chatItemList.setProps({
        list: newProps.chatList,
      });
    }
    return true;
  }

  handleClickProfile(event?: Event) {
    event && event.preventDefault();
    this.router.go(AppRoutes.SETTINGS);
  }

  handleSearchChats(event?: Event) {
    const inputName = this.props.inputSearch?.props.name;
    const inputElement = inputName && document.getElementsByClassName('input').namedItem(inputName);

    inputElement && ChatsController.getChats(inputElement.value);
  }

  handleSetActiveChat(chatId: ChatItem['id']) {
    const activeChat = (this.props.chatList || []).find((item) => item.id === chatId);
    activeChat && store.set('activeChat', {...activeChat});
  }
}

export default ChatListViewPanelComponent;
