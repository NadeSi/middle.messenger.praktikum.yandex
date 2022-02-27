import {MessageItem} from '../../../models/message';

type MessageItemInnerProps = {
  userId: MessageItem['userId'];
  content: MessageItem['content'];
  time: string;
};

export type MessageItemProps = MessageItemInnerProps & {
  date: Date;
};
