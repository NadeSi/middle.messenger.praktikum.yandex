export interface IUserUpdateApi {
  login: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  avatar?: string;
}

export interface IUserItemApi extends IUserUpdateApi {
  id: number;
}

export interface IUserPasswordApi {
  oldPassword: string;
  newPassword: string;
}
