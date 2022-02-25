import {AuthService} from '../../service/auth/auth.service';
import {IAuthApiData, IAuthApiLoginData} from '../../service/auth/auth.helper';
import store from '../../modules/store/store';
import appRouteTransitions from '../../utils/app-router/app-route-transitions';

//export type IAuthLoginData = IAuthApiLoginData;

class AuthController {
  constructor(private authService = new AuthService()) {
    //
  }

  public receiveCurrentUser() {
    store.set('isAuthLoading', true);

    this.authService
      .getUser()
      .then((data) => {
        store.set('currentUser', data);
      })
      .finally(() => {
        store.set('isAuthLoading', false);
        appRouteTransitions();
      });
  }

  getCurrentUser() {
    return store.getState().currentUser;
  }

  register(data: IAuthApiData) {
    this.authService
      .register(data)
      .then(() => {
        this.receiveCurrentUser();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  login(data: IAuthApiLoginData) {
    this.authService
      .login(data)
      .then(() => {
        this.receiveCurrentUser();
      })
      .catch((e) => console.log(e));
  }

  logout() {
    this.authService
      .logout()
      .then(() => {
        document.cookie = 'expires=0';
        store.set('currentUser', undefined);
      })
      .catch((e) => console.error(e));
  }
}

export default new AuthController();
