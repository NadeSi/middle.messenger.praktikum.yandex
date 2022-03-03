import {formatLastMessageItem, LastMessageItem, MessageItem} from './message';
import {ChatSidebarMode, ChatSidebarPosition} from './chat-sidebar';
import {IChatItemApi, IChatUserItemApi} from '../service/chats/chats.helper';
import {IUserItemApi} from '../service/user/user.helper';

export type ChatItem = {
  id: number;
  title: string;
  lastMessage?: LastMessageItem;
  unreadCount?: number;
  avatar?: string;
  users?: ChatItem[];
};

export type ActiveChat = ChatItem | Record<string, never>;
export type ActiveChatContent = MessageItem[];

export type ChatSidebarItem = {
  isVisible: boolean;
  position: ChatSidebarPosition;
  mode: ChatSidebarMode;

  chatList?: ChatItem[];
  chatUserList?: ChatItem[];
  activeChat?: ActiveChat;
};

//////////////////////////////////////////////
// format
//////////////////////////////////////////////
export const formatChatItem = (item: IChatItemApi): ChatItem => {
  return {
    id: item.id,
    title: item.title,
    unreadCount: item.unread_count,
    avatar: item.avatar,
    lastMessage: item.last_message && formatLastMessageItem(item.last_message),
  };
};

export const formatChatUserItem = (item: IChatUserItemApi | IUserItemApi): ChatItem => {
  return {
    id: item.id,
    title: item.display_name || item.login,
    avatar: item.avatar,
  };
};
