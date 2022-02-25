import store from '../../modules/store/store';
import {AuthService} from '../../service/auth/auth.service';
import {UserService} from '../../service/user/user.service';
import {IAuthApiData} from '../../service/auth/auth.helper';
import {IUserItemApi, IUserPasswordApi, IUserUpdateApi} from '../../service/user/user.helper';
import {UserItem} from '../../models/user';
import {ChatItemProps} from '../../components/chat/chat-sidebar/chat-sidebar-content/_components/chat-item/chat-item.model';
import {ChatItem, formatChatItem, formatChatUserItem} from '../../models/chat';
import {formatList} from '../../models/common';
import {IChatItemApi} from '../../service/chats/chats.helper';

export type UserData = IUserItemApi;

export type UserPasswordData = IUserPasswordApi;

class UserController {
  constructor(private authService = new AuthService(), private userService = new UserService()) {
    //
  }

  public getUserById(id: number) {
    // this.userService.getUserInfo(id).then((data) => store.set('user', data));
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
