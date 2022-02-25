export type AuthLoginItem = {
  login: string;
  password: string;
};

export type AuthItem = AuthLoginItem & {
  email: string;
  first_name: string;
  second_name: string;
  phone: string;
  passwordCopy: string;
};

export type CurrentUserItem = {
  id: number;
  login: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  avatar: string;
};

export type CurrentUserPasswordItem = {
  oldPassword: string;
  newPassword: string;
  newPasswordCopy: string;
};
