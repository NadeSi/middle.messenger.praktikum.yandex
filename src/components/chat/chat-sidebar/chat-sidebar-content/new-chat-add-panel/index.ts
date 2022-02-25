import {Component} from '../../../../../modules/component';
import {NewChatAddPanelHandlers, NewChatAddPanelOuterProps, NewChatAddPanelProps} from './new-chat-add-panel.model';
import template from './new-chat-add-panel.tmpl';

import './new-chat-add-panel.scss';
import ButtonIconComponent from '../../../../common/button/button-icon';
import InputComponent, {IInputType} from '../../../../common/input';
import {ChatsController} from '../../../../../controllers/chats';
import ChatAddButtonComponent from '../_components/chat-add-button';

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
    // this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleClickAddChat = this.handleClickAddChat.bind(this);
  }

  // handleClickCancel(event: Event) {
  //   event.preventDefault();
  //   this.handlers.onClickCancel && this.handlers.onClickCancel(event);
  // }

  handleClickAddChat(event: Event) {
    event.preventDefault();

    if (this.chatTitleElement) {
      //this.handlers.onClickAddChat && this.handlers.onClickAddChat(this.chatTitleElement.value);

      ChatsController.createChat(this.chatTitleElement.value)
        .then((data) => {
          ChatsController.getChats();
          this.handlers.onClickCancel && this.handlers.onClickCancel();
        })
        .catch((e) => console.log(e));
    }
  }

  afterRender = (parentElement: HTMLElement) => {
    // const buttonCancel: Element = parentElement?.getElementsByClassName('button-new-chat-cancel')[0];
    // buttonCancel && this.handleClickCancel && buttonCancel.addEventListener('click', this.handleClickCancel.bind(this));

    // const buttonAddChat: Element = parentElement?.getElementsByClassName('button-new-chat-add')[0];
    // buttonAddChat &&
    //   this.handleClickAddChat &&
    //   buttonAddChat.addEventListener('click', this.handleClickAddChat.bind(this));

    const inputContainer: Element = parentElement?.getElementsByClassName('chat-new-title-container')[0];
    if (inputContainer) {
      this.chatTitleElement = inputContainer.getElementsByTagName('input')[0];
    }
  };
}

export default NewChatAddPanelComponent;
