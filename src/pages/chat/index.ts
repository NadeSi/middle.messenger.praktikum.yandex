import Block from '../../modules/block';
import template from './chat.tmpl';
import {ChatProps} from './chat.model';
import InputComponent from '../../components/input';
import {IInputType} from '../../components/input';
import ChatPanelComponent from '../../components/chat/chat-panel';
import ChatItemComponent from '../../components/chat/chat-item';
import MessagesTopPanelComponent from '../../components/messages/messages-top-panel';
import MessagesViewPanelComponent from '../../components/messages/messages-view-panel';
import MessagesInputPanelComponent from '../../components/messages/messages-input-panel';
import MessageItemComponent from '../../components/messages/message-item';

import './chat.scss';

export default class Chat extends Block<ChatProps> {
  constructor() {
    super('page-chat', template, {
      chatPanel: new ChatPanelComponent({
        inputSearch: new InputComponent({
          name: 'inputSearch',
          type: IInputType.text,
          placeholder: 'Поиск',
          value: '',
        }),
        chatItemList: [
          new ChatItemComponent({
            header: 'Андрей',
          }),
          new ChatItemComponent({
            header: 'Вадим',
            lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! Спешу вам сообщить, что бла-бла-бла',
            date: '15.07',
            notificationCount: 33,
          }),
        ],
      }),
      messagesTopPanel: new MessagesTopPanelComponent({
        userName: 'Alex',
      }),
      messagesViewPanel: new MessagesViewPanelComponent({
        messageDateGroup: [
          {
            date: '12 декабря',
            messageItemList: [
              new MessageItemComponent({userLogin: 'ha123', message: 'привет', date: new Date('12.12.2021 11:32:00')}),
              new MessageItemComponent({
                userLogin: 'ha123',
                message: 'как дела',
                date: new Date('12.12.2021 11:32:03'),
              }),
              new MessageItemComponent({userLogin: 'alex', message: 'норм', date: new Date('12.12.2021 11:35:40')}),
              new MessageItemComponent({
                userLogin: 'alex',
                message: 'бла-бла бла бла бла, бла бла бла; бла-бла бла бла бла, бла бла бла',
                date: new Date('12.12.2021 11:35:40'),
              }),
            ],
          },
        ],
      }),
      messagesInputPanel: new MessagesInputPanelComponent(
        {
          inputMessage: new InputComponent({
            name: 'message',
            type: IInputType.text,
            value: '',
            placeholder: 'Сообщение',
          }),
        },
        {
          onSendMessage: (message) => this.handleSendMessage(message),
        },
      ),
    });
  }

  handleSendMessage(message: string) {
    console.log(message);
  }
}
