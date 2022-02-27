import store from '../../modules/store/store';
import {AuthService} from '../../service/auth/auth.service';
import {UserService} from '../../service/user/user.service';
import {IUserItemApi, IUserPasswordApi, IUserUpdateApi} from '../../service/user/user.helper';
import {UserItem} from '../../models/user';
import {ChatItem, formatChatUserItem} from '../../models/chat';
import {formatList} from '../../models/common';

export type UserData = IUserItemApi;

export type UserPasswordData = IUserPasswordApi;

class UserController {
  constructor(private authService = new AuthService(), private userService = new UserService()) {
    //
  }

  public changeUserAvatar(file: File) {
    this.userService.updateUserAvatar(file).then((data) => {
      store.set('currentUser', data);
    });
  }

  public changeUserProfile(data: UserItem) {
    return this.userService.setUserInfo(data).then((data) => store.set('currentUser', data));
  }

  public changeUserPassword(data: UserPasswordData) {
    return this.userService.setUserPassword(data);
  }

  public searchUser(login = '') {
    return this.userService.searchUsers(login).then((data) => {
      const users = formatList<IUserItemApi, ChatItem>(data, formatChatUserItem);
      store.set('userList', users);
    });
  }
}

export default new UserController();
