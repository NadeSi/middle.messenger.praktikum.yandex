export enum CallMethodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IHttpOptions {
  method?: CallMethodType;
  headers?: Record<string, string>;
  data?: any;
  timeout?: number;
}

export function queryStringify(data: Record<string, unknown>): string {
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}
