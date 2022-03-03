import InputComponent from '../../../../common/input';
import ChatAddButtonComponent, {ChatAddButtonHandlers} from '../_components/chat-add-button';
import ButtonIcon from '../../../../common/button/button-icon';
import {ChatItem} from '../../../../../models/chat';
import ChatItemListComponent from '../_components/chat-item-list';

type ChatListViewPanelInnerProps = {
  buttonProfile: ButtonIcon;
  inputSearch: InputComponent;
  buttonSearchChats: ButtonIcon;
  chatAddButton: ChatAddButtonComponent;
  chatItemList: ChatItemListComponent;
};

export type ChatListViewPanelOuterProps = {
  chatList?: ChatItem[];
};

export type ChatListViewPanelProps = ChatListViewPanelInnerProps & ChatListViewPanelOuterProps;

export type ChatListViewPanelHandlers = {
  onShowAddChatPanel?: ChatAddButtonHandlers['onClick'];
};
