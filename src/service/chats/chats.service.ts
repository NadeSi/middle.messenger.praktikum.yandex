import {BaseAPI, IBaseApiOptions} from '../base.api';
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
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
  }

  createChat(data: IChatCreateDataApi): Promise<{id: number}> {
    return this._http.post(`${this._baseUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  }

  deleteChat(data: {chatId: number}) {
    return this._http.delete(`${this._baseUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  }

  /**chat user*/
  getChatUsers(chatId: number, filter: IChatPaging): Promise<IChatUserItemApi[]> {
    return this._http.get(`${this._baseUrl}/${chatId}/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: filter,
    });
  }

  addChatUsers(data: IChatModifyUsersApi) {
    return this._http.put(`${this._baseUrl}/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  }

  deleteChatUsers(data: IChatModifyUsersApi) {
    return this._http.delete(`${this._baseUrl}/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
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
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      data: formData,
    });
  }

  connect(chatId: number): Promise<IChatTokenApi> {
    return this._http.post(`${this._baseUrl}/token/${chatId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
