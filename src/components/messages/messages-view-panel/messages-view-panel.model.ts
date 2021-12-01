import MessageItemComponent from '../message-item';

export interface IMessagesViewPanelProps {
  messageDateGroup: {
    date: string;
    messageItemList: MessageItemComponent[];
  }[];
}
