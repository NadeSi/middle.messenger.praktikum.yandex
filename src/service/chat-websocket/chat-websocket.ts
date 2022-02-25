import {ChatWebsocketMessageType, isMessageType} from './chat-websocket.helper';
import {ChatsController} from '../../controllers/chats';

export class ChatWebSocket {
  private socket: WebSocket;
  private timerId;

  constructor(userId: number, chatId: number, token: string) {
    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

    this.socket.addEventListener('open', this.onOpen);
    this.socket.addEventListener('close', this.onClose);
    this.socket.addEventListener('message', this.onMessage);
    this.socket.addEventListener('error', this.onError);
  }

  close = () => {
    this.socket.close();
  };

  private onOpen = () => {
    console.log('Соединение установлено');
    this.timerId = setInterval(() => this.ping(), 30000);

    this.getMessages();
  };

  private onClose = (event: CloseEvent) => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    clearInterval(this.timerId);
  };

  private onError = (event: Event) => {
    console.log('Ошибка', event?.message);
  };

  private onMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    console.log('Получены данные', data);

    if (Array.isArray(data) || (data.type && isMessageType(data.type))) {
      console.log(data.type);
      ChatsController.refreshChatMessages(data);
    }
  };

  /**messages */
  ping = () => {
    this.socket.send(
      JSON.stringify({
        type: ChatWebsocketMessageType.PING,
      }),
    );
  };

  sendMessage = (message: string) => {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: ChatWebsocketMessageType.MESSAGE,
      }),
    );
  };

  getMessages = (offset = 0) => {
    this.socket.send(
      JSON.stringify({
        content: offset.toString(),
        type: ChatWebsocketMessageType.GET_OLD,
      }),
    );
  };
}
