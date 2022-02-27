import {MessageType} from '../../models/message';

export enum ChatWebsocketMessageType {
  MESSAGE = 'message',
  FILE = 'file',
  GET_OLD = 'get old',
  PONG = 'pong',
  PING = 'ping',
  USER_CONNECTED = 'user connected',
}

export const isMessageType = (type: ChatWebsocketMessageType) => {
  //console.log('isMessageType', type, [ChatWebsocketMessageType.MESSAGE, ChatWebsocketMessageType.FILE].includes(type));
  return [ChatWebsocketMessageType.MESSAGE, ChatWebsocketMessageType.FILE].includes(type);
};

export type MessageDataApi = {
  id: number;
  user_id: number;
  chat_id: number;
  type: MessageType;
  time: string;
  content: string;
  is_read: boolean;
  //file: null;
};
