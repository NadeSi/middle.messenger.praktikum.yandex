import {ActiveChat, ChatItem} from './chat';

export enum ChatSidebarPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ChatSidebarMode {
  //right
  CHAT_LIST_VIEW = 'CHAT_LIST_VIEW',
  NEW_CHAT_ADD = 'NEW_CHAT_ADD',

  //left
  CHAT_INFO_VIEW = 'CHAT_INFO_VIEW',
  CHAT_ADD_USERS = 'CHAT_ADD_USERS',
}

export type ChatSidebarType = {
  isVisible: boolean;
  position: ChatSidebarPosition;
  mode: ChatSidebarMode;

  chatList?: ChatItem[];
  chatUserList?: ChatItem[];
  activeChat?: ActiveChat;
};
