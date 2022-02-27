export type UserItem = {
  id: number;
  login: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  // avatar: string;
};

export type ChatUserItem = UserItem & {
  role: string;
};
