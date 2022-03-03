import {BaseAPI} from '../base.api';
import {
  IChatModifyUsersApi,
  IChatCreateDataApi,
  IChatItemApi,
  IChatPaging,
  IChatsFilter,
  IChatTokenApi,
  IChatUpdateAvatarApi,
  IChatUserItemApi,
} from './chats.helper';

export class ChatsService extends BaseAPI {
  constructor() {
    super({baseUrl: '/chats'});
  }

  /**chat */
  getChats(data?: IChatsFilter): Promise<IChatItemApi[]> {
    return this._http.get(`${this._baseUrl}`, {
      headers: this._headers,
      data,
    });
  }

  createChat(data: IChatCreateDataApi): Promise<{id: number}> {
    return this._http.post(`${this._baseUrl}`, {
      headers: this._headers,
      data: JSON.stringify(data),
    });
  }

  deleteChat(data: {chatId: number}) {
    return this._http.delete(`${this._baseUrl}`, {
      headers: this._headers,
      data: JSON.stringify(data),
    });
  }

  /**chat user*/
  getChatUsers(chatId: number, filter: IChatPaging): Promise<IChatUserItemApi[]> {
    return this._http.get(`${this._baseUrl}/${chatId}/users`, {
      headers: this._headers,
      data: filter,
    });
  }

  addChatUsers(data: IChatModifyUsersApi) {
    return this._http.put(`${this._baseUrl}/users`, {
      headers: this._headers,
      data: JSON.stringify(data),
    });
  }

  deleteChatUsers(data: IChatModifyUsersApi) {
    return this._http.delete(`${this._baseUrl}/users`, {
      headers: this._headers,
      data: JSON.stringify(data),
    });
  }

  /** */
  updateChatAvatar(data: IChatUpdateAvatarApi): Promise<IChatUserItemApi> {
    const formData = new FormData();

    formData.append('chatId', data.chatId.toString());
    formData.append('avatar', data.avatar, `avatar`);

    console.log('avatarType', data.avatar.type);

    return this._http.put(`${this._baseUrl}/avatar`, {
      data: formData,
    });
  }

  connect(chatId: number): Promise<IChatTokenApi> {
    return this._http.post(`${this._baseUrl}/token/${chatId}`, {
      headers: this._headers,
    });
  }
}
