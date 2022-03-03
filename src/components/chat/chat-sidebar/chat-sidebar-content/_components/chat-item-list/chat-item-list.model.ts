import {ChatItem} from '../../../../../../models/chat';
import ChatItemComponent, {ChatItemHandlers} from '../chat-item';

type ChatItemListInnerProps = {
  chatItemList: ChatItemComponent[];
};

export type ChatItemListOuterProps = {
  list?: ChatItem[];
};

export type ChatItemListProps = ChatItemListInnerProps & ChatItemListOuterProps;

export type ChatItemListHandlers = {
  onClickChatItem?: ChatItemHandlers['onClickChatItem'];
  onClickDeleteItem?: ChatItemHandlers['onClickDeleteItem'];
};
