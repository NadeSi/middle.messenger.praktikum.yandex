import {CallMethodType, IHttpOptions, queryStringify} from './http.helper';

export class HttpService {
  get = (url: string, options: IHttpOptions = {}) => {
    const {data} = options;
    if (data) {
      url += queryStringify(data);
    }
    return this.request(url, {...options, method: CallMethodType.GET}, options.timeout);
  };

  put = (url: string, options: IHttpOptions = {}) => {
    return this.request(url, {...options, method: CallMethodType.PUT}, options.timeout);
  };

  post = (url: string, options: IHttpOptions = {}) => {
    return this.request(url, {...options, method: CallMethodType.POST}, options.timeout);
  };

  delete = (url: string, options: IHttpOptions = {}) => {
    return this.request(url, {...options, method: CallMethodType.DELETE}, options.timeout);
  };

  request = (url: string, options: IHttpOptions, timeout = 5000) => {
    const {method, data, headers} = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === CallMethodType.GET;

      xhr.open(method, url);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
