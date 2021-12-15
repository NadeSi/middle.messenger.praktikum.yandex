import './styles/index.scss';

import Router from './modules/router/router';
import AppRoutes from './utils/app-routes';
import TestPage from './pages/test';
import Chat from './pages/chat';
import Login from './pages/login';
import NotFound from './pages/not-found';
import ServerError from './pages/server-error';
import Register from './pages/register';
import Settings from './pages/settings';
import SettingsEdit from './pages/settings/settings-edit';
import SettingsEditPassword from './pages/settings/settings-edit-password';

const router = new Router('.app');

router
  .use(AppRoutes.HOME, TestPage)
  .use(AppRoutes.REGISTER, Register)
  .use(AppRoutes.LOGIN, Login)
  .use(AppRoutes.SETTINGS, Settings)
  .use(AppRoutes.SETTINGS_EDIT, SettingsEdit)
  .use(AppRoutes.SETTINGS_EDIT_PASSWORD, SettingsEditPassword)
  .use(AppRoutes.MESSENGER, Chat)
  .use(AppRoutes.SERVER_ERROR, ServerError)
  .use('*', NotFound)
  .start();
