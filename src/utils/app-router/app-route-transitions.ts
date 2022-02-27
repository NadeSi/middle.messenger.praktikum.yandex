import Router from '../../modules/router/router';
import AppRoutes from './app-routes';
import {AuthController} from '../../controllers/auth';
import store from '../../modules/store/store';

const protectedRoutes: AppRoutes[] = [
  AppRoutes.SETTINGS,
  AppRoutes.SETTINGS_EDIT,
  AppRoutes.SETTINGS_EDIT_PASSWORD,
  AppRoutes.MESSENGER,
];
const authenticatedRoutes: AppRoutes[] = [AppRoutes.LOGIN, AppRoutes.REGISTER];

const appRouteTransitions = () => {
  const router = Router.getInstance();

  const currentRoute = router.getCurrentRoute() as AppRoutes;
  const isProtectedRoute = currentRoute && protectedRoutes.includes(currentRoute);
  const isAuthenticatedRoutes = currentRoute && authenticatedRoutes.includes(currentRoute);
  const isHomeRoute = currentRoute && currentRoute === AppRoutes.HOME;

  const routeTransitions = () => {
    const currentUser = AuthController.getCurrentUser();
    if (currentUser && (isAuthenticatedRoutes || isHomeRoute)) {
      //console.log('AuthenticatedRoutes router go to MESSENGER');
      router.go(AppRoutes.MESSENGER);
    }
    if (!currentUser && (isProtectedRoute || isHomeRoute)) {
      //console.log('ProtectedRoute router go to LOGIN');
      router.go(AppRoutes.LOGIN);
    }
  };

  if (!store.getState()?.isAuthLoading && store.getState()?.isAuthLoading != undefined) {
    routeTransitions();
  } else {
    const timerId = setInterval(() => {
      if (!store.getState().isAuthLoading && store.getState().isAuthLoading != undefined) {
        clearInterval(timerId);
        routeTransitions();
      }
    }, 200);
  }
};

export default appRouteTransitions;
