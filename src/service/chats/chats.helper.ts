import {IUserItemApi, IUserUpdateApi} from '../user/user.helper';

export interface IChatPaging {
  offset?: number;
  limit?: number;
}

export interface IChatsFilter extends IChatPaging {
  title?: string;
}

export interface IChatItemApi {
  id: number;
  created_by: number;
  avatar: string;
  title: string;
  unread_count: number;
  last_message: ILastMessageItemApi;
}

export interface ILastMessageItemApi {
  id: number;
  content: string;
  time: string;
  user: IUserUpdateApi;
}

export interface IChatUserItemApi extends IUserItemApi {
  id: number;
}

export interface IChatUpdateAvatarApi {
  chatId: number;
  avatar: File;
}

/////////////
export interface IChatCreateDataApi {
  title: string;
}

export interface IChatModifyUsersApi {
  users: number[];
  chatId: number;
}

export interface IChatTokenApi {
  token: string;
}
