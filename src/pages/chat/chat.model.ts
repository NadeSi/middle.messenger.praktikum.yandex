import ChatChatMainPanelComponent from '../../components/chat/chat-main-panel';
import {ActiveChat, ActiveChatContent, ChatItem} from '../../models/chat';
import {CurrentUserItem} from '../../models/auth';
import {
  ChatSidebarLeftComponent,
  ChatSidebarRightComponent,
  ChatSidebarProps,
} from '../../components/chat/chat-sidebar';

export type ChatInnerProps = {
  chatSidebarRight?: ChatSidebarRightComponent;
  chatMainPanel?: ChatChatMainPanelComponent;
  chatSidebarLeft?: ChatSidebarLeftComponent;
};

export type ChatProps = ChatInnerProps & {
  currentUser?: CurrentUserItem;

  sidebarRight?: ChatSidebarProps;
  sidebarLeft?: ChatSidebarProps;

  chatList: ChatItem[];
  chatUserList: ChatItem[];

  activeChat: ActiveChat;
  activeChatContent: ActiveChatContent;
};
