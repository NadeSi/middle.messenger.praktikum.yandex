import {Component} from '../../../../../../modules/component';
import {ChatItemHandlers, ChatItemOuterProps, ChatItemProps} from './chat-item.model';
import template from './chat-item.tmpl';

import AvatarComponent from '../../../../../common/avatar';
import ButtonIconComponent from '../../../../../common/button/button-icon';
import {getMessageDate} from '../../../../../../utils/message-date';

import './chat-item.scss';

class ChatItemComponent extends Component<ChatItemProps> {
  handlers: ChatItemHandlers;

  constructor(props: ChatItemOuterProps, handlers: ChatItemHandlers) {
    super('chat-item', template, {
      ...props,
      lastMessageDate: getMessageDate(props.lastMessage?.date),
      avatarElement: new AvatarComponent({
        name: `chat-item-avatar-${props.id}`,
        avatar: props.avatar,
      }),
    });

    this.handlers = handlers;
    this.handleClickChatItem = this.handleClickChatItem.bind(this);
    this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);

    if (this.handlers.onClickDeleteItem) {
      //TODO нельзя удалять пользователя с ролью админ
      this.props.buttonDeleteItem = new ButtonIconComponent(
        {
          name: `chat-item-delete-button-${this.props.id}`,
          icon: 'icon-delete-user',
        },
        {
          onClick: this.handleClickDeleteItem,
        },
      );
    }
  }

  afterRender = (parentElement: HTMLElement) => {
    const chatItem: Element = parentElement
      ?.getElementsByClassName('chat-item')
      ?.namedItem(this.props.id.toString()) as Element;
    chatItem && chatItem.addEventListener('click', this.handleClickChatItem.bind(this));
  };

  componentDidUpdate(oldProps: ChatItemProps, newProps: ChatItemProps) {
    if (oldProps.avatar !== newProps.avatar) {
      this.props.avatarElement.setProps({avatar: newProps.avatar});
    }
    return true;
  }

  handleClickChatItem(event: Event) {
    event.preventDefault();
    this.handlers.onClickChatItem && this.handlers.onClickChatItem(this.props.id);
  }

  handleClickDeleteItem(event: Event) {
    event.preventDefault();
    this.handlers.onClickDeleteItem && this.handlers.onClickDeleteItem(this.props.id);
  }
}

export {ChatItemHandlers};
export default ChatItemComponent;
