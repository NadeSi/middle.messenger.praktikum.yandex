import {ChatItem} from '../../models/chat';
import {CurrentUserItem} from '../../models/auth';
import {MessageItem} from '../../models/message';
import {ChatSidebarType} from '../../models/chat-sidebar';
import {ChatSidebarProps} from '../../components/chat/chat-sidebar';

export enum StoreEvents {
  UPDATED = 'updated',
}

export interface IState {
  isAuthLoading: boolean;
  currentUser?: CurrentUserItem;

  sidebarLeft?: ChatSidebarProps;
  sidebarRight?: ChatSidebarProps;

  chatList?: ChatItem[];
  userList?: ChatItem[];

  activeChat?: ChatItem;
  activeChatContent?: MessageItem[];
  ///////////////
  //user?: SettingProps;
  //TODO ПОчистить
}
