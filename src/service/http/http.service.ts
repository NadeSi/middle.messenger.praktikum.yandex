import {CallMethodType, IHttpOptions, queryStringify} from './http.helper';
import {tryParseJSON} from '../../utils/helpers/tryParseJSON';

export class HttpService {
  get = (url: string, options: IHttpOptions = {}) => {
    const {data} = options;
    if (data) {
      url += queryStringify(data);
    }
    return this.fetch(url, {...options, method: CallMethodType.GET}, options.timeout);
  };

  put = (url: string, options: IHttpOptions = {}) => {
    return this.fetch(url, {...options, method: CallMethodType.PUT}, options.timeout);
  };

  post = (url: string, options: IHttpOptions = {}) => {
    return this.fetch(url, {...options, method: CallMethodType.POST}, options.timeout);
  };

  delete = (url: string, options: IHttpOptions = {}) => {
    return this.fetch(url, {...options, method: CallMethodType.DELETE}, options.timeout);
  };

  request = (url: string, options: IHttpOptions, timeout = 5000) => {
    const {method, data = JSON.stringify({}), headers} = options;
    // const {method, data = {}, headers} = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
      }
      xhr.withCredentials = true;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      xhr.send(data);
    });
  };

  fetch(url: string, options: IHttpOptions, timeout = 5000) {
    try {
      const response = this.request(url, options, timeout);

      return response.then(this.handleResponse, this.handleError);
    } catch (e) {
      return this.handleError(e);
    }
  }

  handleResponse = (response: any) => {
    try {
      if (response && response.status === 200) {
        return Promise.resolve(tryParseJSON(response.response));
      }
      return this.handleError(response);
    } catch (e) {
      return this.handleError(e);
    }
  };

  handleError = (error: any) => {
    if (error && error.response) {
      const err = JSON.parse(error.response);
      return Promise.reject(err?.reason || err);
    }
    return Promise.reject(error);
  };
}
