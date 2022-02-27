import {BaseAPI} from '../base.api';
import {IAuthApiData, IAuthApiLoginData} from './auth.helper';

export class AuthService extends BaseAPI {
  constructor() {
    super({baseUrl: '/auth'});
  }

  register(data: IAuthApiData) {
    return this._http.post(`${this._baseUrl}/signup`, {
      headers: this._headers,
      data: JSON.stringify(data),
    });
  }

  login(data: IAuthApiLoginData) {
    return this._http.post(`${this._baseUrl}/signin`, {
      headers: this._headers,
      data: JSON.stringify(data),
    });
  }

  logout() {
    return this._http.post(`${this._baseUrl}/logout`, {
      headers: this._headers,
    });
  }

  getUser() {
    return this._http.get(`${this._baseUrl}/user`, {
      headers: this._headers,
    });
  }
}
