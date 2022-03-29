import {Component} from '../../../../../modules/component';
import {ChatInfoPanelOuterProps, ChatInfoPanelProps, ChatInfoPanelHandlers} from './chat-info-panel.model';
import template from './chat-info-panel.tmpl';

import ButtonIconComponent from '../../../../common/button/button-icon';
import ChatAddButtonComponent from '../_components/chat-add-button';
import AvatarComponent from '../../../../common/avatar';
import ChatItemList from '../_components/chat-item-list';
import isEqual from '../../../../../utils/helpers/isEqual';
import {ChatsController} from '../../../../../controllers/chats';

import './chat-info-panel.scss';

class ChatInfoPanelComponent extends Component<ChatInfoPanelProps> {
  handlers: ChatInfoPanelHandlers;

  constructor(props: ChatInfoPanelOuterProps, handlers: ChatInfoPanelHandlers) {
    super('chat-info-panel', template, {
      ...props,
      title: '',
      buttonCancelPanel: new ButtonIconComponent(
        {
          name: 'chat-info-panel-cancel',
          icon: 'icon-close',
        },
        {
          onClick: (e) => this.handlers.onClickButtonCancelPanel && this.handlers.onClickButtonCancelPanel(e),
        },
      ),
      buttonDeleteChat: new ButtonIconComponent(
        {
          name: 'chat-info-panel-delete',
          icon: 'icon-delete',
        },
        {
          onClick: (e) => this.handleDeleteChat(e),
        },
      ),
      buttonShowUsersPanel: new ChatAddButtonComponent(
        {
          name: 'chat-info-panel-show-users',
          icon: 'icon-add-user',
        },
        {
          onClick: (e) => this.handlers.onClickButtonShowUsersPanel && this.handlers.onClickButtonShowUsersPanel(e),
        },
      ),
      avatarElement: new AvatarComponent(
        {
          name: 'chat-info-avatar',
          isEditMode: true,
          avatar: props.activeChat?.avatar,
        },
        {
          onChangeAvatar: (e) => this.handleChangeAvatar(e),
        },
      ),
      chatItemList: new ChatItemList(
        {
          list: [],
        },
        {
          onClickDeleteItem: (e) => this.handleDeleteChatUser(e),
        },
      ),
    });

    this.handlers = handlers;
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleDeleteChatUser = this.handleDeleteChatUser.bind(this);
    this.handleDeleteChat = this.handleDeleteChat.bind(this);
  }

  componentDidUpdate(oldProps: ChatInfoPanelProps, newProps: ChatInfoPanelProps) {
    if (!isEqual(oldProps.activeChat, newProps.activeChat)) {
      this.setProps({title: newProps.activeChat?.title});
      this.props.avatarElement.setProps({avatar: newProps.activeChat?.avatar});
      this.props.chatItemList.setProps({
        list: newProps.activeChat?.users || [],
      });
    }
    return true;
  }

  handleChangeAvatar(file: File) {
    if (this.props.activeChat?.id) {
      ChatsController.updateChatAvatar(this.props.activeChat.id, file);
    }
  }

  handleDeleteChatUser(chatUserId: number) {
    if (this.props.activeChat?.id) {
      ChatsController.deleteChatUser(this.props.activeChat.id, chatUserId);
    }
  }

  handleDeleteChat(event?: Event) {
    if (this.props.activeChat?.id) {
      this.handlers.onClickButtonDeleteChat && this.handlers.onClickButtonDeleteChat(this.props.activeChat.id);
    }
  }
}

export type {ChatInfoPanelOuterProps as ChatInfoPanelProps, ChatInfoPanelHandlers};
export default ChatInfoPanelComponent;
