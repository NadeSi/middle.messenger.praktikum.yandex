import {
  ChatListViewPanelComponent,
  NewChatAddPanelComponent,
  ChatUsersPanelComponent,
  ChatInfoPanelComponent,
} from '../chat-sidebar-content';
import {ActiveChat, ChatItem} from '../../../../models/chat';
import {ChatSidebarMode, ChatSidebarPosition} from '../../../../models/chat-sidebar';

type ChatSidebarInnerProps = {
  _classNameActive: string;
  position: ChatSidebarPosition;
  mode: ChatSidebarMode;

  //content
  chatListViewPanel?: ChatListViewPanelComponent;
  newChatAddPanel?: NewChatAddPanelComponent;
  chatInfoViewPanel?: ChatInfoPanelComponent;
  chatUsersPanel?: ChatUsersPanelComponent;
};

export type ChatSidebarOuterProps = {
  isVisible: boolean;
  position: ChatSidebarInnerProps['position'];
  mode: ChatSidebarInnerProps['mode'];

  chatList?: ChatItem[];
  chatUserList?: ChatItem[];
  activeChat?: ActiveChat;
};

export type ChatSidebarProps = ChatSidebarInnerProps & ChatSidebarOuterProps;
