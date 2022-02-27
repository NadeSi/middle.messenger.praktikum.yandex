import {Component} from '../../../modules/component';
import {MessagesInputPanelHandlers, MessagesInputPanelProps} from './messages-input-panel.model';
import template from './messages-input-panel.tmpl';

import InputComponent, {IInputType} from '../../common/input';
import ButtonIconComponent from '../../common/button/button-icon';

import './messages-input-panel.scss';

class MessagesInputPanelComponent extends Component<MessagesInputPanelProps> {
  handlers: MessagesInputPanelHandlers;

  constructor(props: Record<string, never>, handlers: MessagesInputPanelHandlers) {
    super('messages-input-panel', template, {
      ...props,
      buttonAddFile: new ButtonIconComponent(
        {
          name: 'button-add-file',
          icon: 'icon-resource',
        },
        {
          onClick: (e) => this.handleClickAddFile(e),
        },
      ),
      inputMessage: new InputComponent({
        name: 'message',
        type: IInputType.text,
        value: '',
        placeholder: 'Написать сообщение...',
      }),
      buttonSend: new ButtonIconComponent(
        {
          name: 'button-send-message',
          icon: 'icon-send',
          className: 'button-send-message',
        },
        {
          onClick: (e) => this.handleClickButtonSend(e),
        },
      ),
    });

    this.handlers = handlers;
    this.handleClickAddFile = this.handleClickAddFile.bind(this);
    this.handleClickButtonSend = this.handleClickButtonSend.bind(this);
  }

  handleClickAddFile(event?: Event) {
    //event.preventDefault();
  }

  handleClickButtonSend(event?: Event) {
    event && event.preventDefault();

    const messageInputElement: HTMLInputElement | undefined = document
      .querySelector('.messages-input-panel')
      ?.getElementsByTagName('input')[0];

    if (messageInputElement?.value) {
      this.handlers.onSendMessage && this.handlers.onSendMessage(messageInputElement.value);

      messageInputElement.value = '';
    }
  }
}

export {MessagesInputPanelHandlers};
export default MessagesInputPanelComponent;
