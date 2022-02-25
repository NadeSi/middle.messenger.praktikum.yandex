import {HttpService} from './http/http.service';

export interface IBaseApiOptions {
  baseUrl: string;
  headers?: Record<string, string>;
}

const HOST = 'https://ya-praktikum.tech/api/v2';

export abstract class BaseAPI {
  protected _baseUrl: string;
  protected _headers?: Record<string, string>;
  protected _http: HttpService;

  protected constructor(options: IBaseApiOptions) {
    this._baseUrl = HOST.concat(options.baseUrl);
    this._headers = {
      'Content-Type': 'application/json',
    };
    this._http = new HttpService();
  }

  // callApi(url: string, init = {}) {
  //   return this._http(`${this._baseUrl}${url}`, init).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Ошибка: ${res.status}`);
  //   });
  // }

  // create() {
  //   throw new Error('Not implemented');
  // }
  //
  // request() {
  //   throw new Error('Not implemented');
  // }
  //
  // update() {
  //   throw new Error('Not implemented');
  // }
  //
  // delete() {
  //   throw new Error('Not implemented');
  // }
}
