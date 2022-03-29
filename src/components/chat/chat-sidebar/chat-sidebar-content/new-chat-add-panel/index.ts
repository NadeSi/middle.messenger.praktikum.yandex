import {Component} from '../../../../../modules/component';
import {NewChatAddPanelHandlers, NewChatAddPanelOuterProps, NewChatAddPanelProps} from './new-chat-add-panel.model';
import template from './new-chat-add-panel.tmpl';

import ButtonIconComponent from '../../../../common/button/button-icon';
import InputComponent from '../../../../common/input';
import {IInputType} from '../../../../common/input/input.model';
import {ChatsController} from '../../../../../controllers/chats';
import ChatAddButtonComponent from '../_components/chat-add-button';

import './new-chat-add-panel.scss';

class NewChatAddPanelComponent extends Component<NewChatAddPanelProps> {
  handlers: NewChatAddPanelHandlers;
  chatTitleElement: HTMLInputElement | null = null;

  constructor(props: NewChatAddPanelOuterProps, handlers: NewChatAddPanelHandlers) {
    super('new-chat-add-panel', template, {
      ...props,
      buttonCancel: new ButtonIconComponent(
        {
          name: 'button-new-chat-cancel',
          className: 'button-new-chat-cancel',
          icon: 'icon-back',
        },
        {
          onClick: (e) => this.handlers.onClickCancel && this.handlers.onClickCancel(e),
        },
      ),
      inputNewChatTitle: new InputComponent({
        name: 'chat-title',
        type: IInputType.text,
        placeholder: 'Название чата',
        value: '',
      }),
      buttonNewChatAdd: new ChatAddButtonComponent(
        {
          name: 'button-new-chat-add',
          icon: 'icon-send',
        },
        {
          onClick: (e) => this.handleClickAddChat(e),
        },
      ),
    });

    this.handlers = handlers;
    this.handleClickAddChat = this.handleClickAddChat.bind(this);
  }

  handleClickAddChat(event: Event) {
    event.preventDefault();

    if (this.chatTitleElement) {
      ChatsController.createChat(this.chatTitleElement.value)
        .then((data) => {
          ChatsController.getChats();
          this.handlers.onClickCancel && this.handlers.onClickCancel();
        })
        .catch((e) => console.log(e));
    }
  }

  afterRender = (parentElement: HTMLElement) => {
    const inputContainer: Element = parentElement?.getElementsByClassName('chat-new-title-container')[0];
    if (inputContainer) {
      this.chatTitleElement = inputContainer.getElementsByTagName('input')[0];
    }
  };
}

export default NewChatAddPanelComponent;
