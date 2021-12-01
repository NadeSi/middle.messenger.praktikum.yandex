import {Component} from '../../../modules/component';
import {IMessagesInputPanelHandlers, IMessagesInputPanelProps} from './messages-input-panel.model';
import template from './messages-input-panel.tmpl';

import './messages-input-panel.scss';

export class MessagesInputPanelComponent extends Component {
  handlers: IMessagesInputPanelHandlers;

  constructor(props: IMessagesInputPanelProps, handlers: IMessagesInputPanelHandlers) {
    super('messages-input-panel', template, props);

    this.handlers = handlers;
  }

  handleClickButtonSend(event: Event) {
    event.preventDefault();

    const messageInputElement: HTMLInputElement | undefined = document
      .querySelector('.messages-input-panel')
      ?.getElementsByTagName('input')[0];

    if (messageInputElement?.value) {
      this.handlers.onSendMessage && this.handlers.onSendMessage(messageInputElement.value);
    }
  }

  afterRender = (parentElement: HTMLElement) => {
    const buttonSendElement: Element = parentElement?.getElementsByClassName('button-send')[0];

    buttonSendElement.addEventListener('click', this.handleClickButtonSend.bind(this));
  };
}

export {IMessagesInputPanelProps};
export default MessagesInputPanelComponent;
