import MessageItemComponent from '../message-item';
import {MessageItem} from '../../../models/message';

type MessagesViewPanelInnerProps = {
  messageItemList?: MessageItemComponent[];
};

export type MessagesViewPanelOuterProps = {
  messageList: MessageItem[];
};

export type MessagesViewPanelProps = MessagesViewPanelInnerProps & MessagesViewPanelOuterProps;
