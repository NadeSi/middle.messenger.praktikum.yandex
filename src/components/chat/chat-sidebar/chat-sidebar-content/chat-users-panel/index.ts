import {Component} from '../../../../../modules/component';
import {ChatUsersPanelHandlers, ChatUsersPanelOuterProps, ChatUsersPanelProps} from './chat-users-panel.model';
import template from './chat-users-panel.tmpl';

import isEqual from '../../../../../utils/helpers/isEqual';
import ButtonIconComponent from '../../../../common/button/button-icon';
import InputComponent, {IInputType} from '../../../../common/input';
import ChatItemComponent from '../_components/chat-item';

import './chat-users-panel.scss';
import {UserController} from '../../../../../controllers/user';
import {ChatsController} from '../../../../../controllers/chats';
import ChatItemListComponent from '../_components/chat-item-list';

class ChatUsersPanelComponent extends Component<ChatUsersPanelProps> {
  handlers: ChatUsersPanelHandlers;

  constructor(props: ChatUsersPanelOuterProps, handlers: ChatUsersPanelHandlers) {
    super('chat-users-panel', template, {
      ...props,
      inputSearchUsers: new InputComponent({
        name: 'input-search-users',
        type: IInputType.text,
        placeholder: 'Поиск пользователя',
        value: '',
      }),
      buttonSearchUsers: new ButtonIconComponent(
        {
          name: 'button-search-users',
          className: 'button-search-users',
          icon: 'icon-search',
        },
        {
          onClick: (e) => {
            this.handleSearchUsers(e);
          },
        },
      ),
      buttonCancel: new ButtonIconComponent(
        {
          name: 'button-close-panel',
          icon: 'icon-back',
          className: 'button-add-users-panel',
        },
        {
          onClick: (e) => this.handlers.onClosePanel && this.handlers.onClosePanel(e),
        },
      ),
      userItemsList: new ChatItemListComponent(
        {
          list: [],
        },
        {
          onClickChatItem: (e) => this.handlers.onAddUsersToChat(e),
        },
      ),
    });

    this.handlers = handlers;
    this.handleSearchUsers = this.handleSearchUsers.bind(this);

    UserController.searchUser();
  }

  handleSearchUsers(event?: Event) {
    const inputName = this.props.inputSearchUsers?.props.name;
    const inputElement = inputName && document.getElementsByClassName('input').namedItem(inputName);

    inputElement && UserController.searchUser(inputElement.value);
  }

  componentDidUpdate(oldProps: ChatUsersPanelProps, newProps: ChatUsersPanelProps) {
    if (!isEqual(oldProps.userList, newProps.userList)) {
      this.props.userItemsList.setProps({
        list: newProps.userList,
      });
    }

    return true;
  }
}

export {ChatUsersPanelOuterProps as ChatUsersPanelProps, ChatUsersPanelHandlers};
export default ChatUsersPanelComponent;
