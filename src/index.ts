import './styles/index.scss';

import Router from './modules/router/router';
import store, {StoreEvents} from './modules/store';
import {AuthController} from './controllers/auth';
import AppRoutes from './utils/app-router/app-routes';

import TestPage from './pages/test';
import Chat from './pages/chat';
import Login from './pages/login';
import NotFound from './pages/not-found';
import ServerError from './pages/server-error';
import Register from './pages/register';
import {SettingsView, SettingsEdit, SettingsEditPassword} from './pages/settings';

store.on(StoreEvents.UPDATED, () => {
  //
});

AuthController.receiveCurrentUser();

const router = new Router('.app');

router
  .use(AppRoutes.HOME, TestPage)
  .use(AppRoutes.REGISTER, Register)
  .use(AppRoutes.LOGIN, Login)
  .use(AppRoutes.SETTINGS, SettingsView)
  .use(AppRoutes.SETTINGS_EDIT, SettingsEdit)
  .use(AppRoutes.SETTINGS_EDIT_PASSWORD, SettingsEditPassword)
  .use(AppRoutes.MESSENGER, Chat)
  .use(AppRoutes.SERVER_ERROR, ServerError)
  .use('*', NotFound)
  .start();
