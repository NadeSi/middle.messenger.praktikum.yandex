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

// type StringIndexed = Record<string, any>;
// function queryStringify(data: StringIndexed): string | never {
//   if (typeof data !== 'object') {
//     throw new Error('Data must be object');
//   }
//
//   const keys = Object.keys(data);
//   return keys.reduce((result, key, index) => {
//     const value = data[key];
//     const endLine = index < keys.length - 1 ? '&' : '';
//
//     if (Array.isArray(value)) {
//       const arrayValue = value.reduce<StringIndexed>(
//         (result, arrData, index) => ({
//           ...result,
//           [`${key}[${index}]`]: arrData,
//         }),
//         {},
//       );
//
//       return `${result}${queryStringify(arrayValue)}${endLine}`;
//     }
//
//     if (typeof value === 'object') {
//       const objValue = Object.keys(value || {}).reduce<StringIndexed>(
//         (result, objKey) => ({
//           ...result,
//           [`${key}[${objKey}]`]: value[objKey],
//         }),
//         {},
//       );
//
//       return `${result}${queryStringify(objValue)}${endLine}`;
//     }
//
//     return `${result}${key}=${value}${endLine}`;
//   }, '');
// }
