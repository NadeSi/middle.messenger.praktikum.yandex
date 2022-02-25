export interface IAuthApiLoginData {
  login: string;
  password: string;
}

export interface IAuthApiData extends IAuthApiLoginData {
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
}
