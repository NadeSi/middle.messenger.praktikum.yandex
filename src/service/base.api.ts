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
      'Content-Security-Policy': `default-src 'self'; img-src *; media-src https://ya-praktikum.tech`,
      'Content-Type': 'application/json',
    };
    this._http = new HttpService();
  }
}
