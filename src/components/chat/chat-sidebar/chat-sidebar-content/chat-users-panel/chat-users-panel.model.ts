import InputComponent from '../../../../common/input';
import ChatItemComponent from '../_components/chat-item';
import ButtonIconComponent from '../../../../common/button/button-icon';
import {ActiveChat, ChatItem} from '../../../../../models/chat';
import ChatItemListComponent from '../_components/chat-item-list';

type ChatUsersPanelInnerProps = {
  inputSearchUsers: InputComponent;
  buttonSearchUsers: ButtonIconComponent;
  buttonCancel: ButtonIconComponent;
  userItemsList: ChatItemListComponent;
};

export type ChatUsersPanelOuterProps = {
  userList: ChatItem[];
};

export type ChatUsersPanelProps = ChatUsersPanelInnerProps & ChatUsersPanelOuterProps;

export type ChatUsersPanelHandlers = {
  onAddUsersToChat(id: number): void;
  onClosePanel(event?: Event): void;
};
