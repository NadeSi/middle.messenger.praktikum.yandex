import {BaseAPI, IBaseApiOptions} from '../base.api';
import {IUserItemApi, IUserPasswordApi, IUserUpdateApi} from './user.helper';
import {IChatUpdateAvatarApi, IChatUserItemApi} from '../chats/chats.helper';

export class UserService extends BaseAPI {
  constructor() {
    super({baseUrl: '/user'});
  }

  getUserInfo(id: number): Promise<IUserItemApi> {
    return this._http.get(`${this._baseUrl}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  setUserPassword(data: IUserPasswordApi) {
    return this._http.put(`${this._baseUrl}/password`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  }

  searchUsers(login: string): Promise<IUserItemApi[]> {
    return this._http.post(`${this._baseUrl}/search`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({login}),
    });
  }

  /** profile */
  setUserInfo(data: IUserUpdateApi): Promise<IUserItemApi> {
    return this._http.put(`${this._baseUrl}/profile`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  }

  updateUserAvatar(avatar: File): Promise<IUserItemApi> {
    const formData = new FormData();

    formData.append('avatar', avatar, `avatar`);

    return this._http.put(`${this._baseUrl}/profile/avatar`, {
      data: formData,
    });
  }
}
