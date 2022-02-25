import {UserItem} from './user';
import {ILastMessageItemApi} from '../service/chats/chats.helper';

export enum MessageType {
  MESSAGE = 'message',
}

export type MessageItem = {
  id: number;
  content: string;
  date: Date;
  userId: number;
  chatId: number;
  type: MessageType;
  isRead: boolean;
  //file: null;
  //TODO работа с файлами
};

export type LastMessageItem = Pick<MessageItem, 'id' | 'content' | 'date'> & {
  user?: UserItem;
};

//////////////////////////////////////////////
// format
//////////////////////////////////////////////
export const formatLastMessageItem = (item: ILastMessageItemApi): LastMessageItem => {
  return {
    id: item.id,
    content: item.content,
    date: new Date(item.time),
  };
};
