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
  const queryList = [];
  for (const [key, value] of Object.entries(data)) {
    queryList.push(`${key}=${Array.isArray(value) ? value.concat() : value}`);
  }
  return `?${queryList.join('&')}`;
}
