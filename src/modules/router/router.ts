import Route from './route';
import {BlockType, RouteProps} from './router.model';

export default class Router {
  private static _instance: Router;

  private _currentRoute: Route | null = null;
  private readonly _rootQuery: string = '';
  routes: Route[] = [];
  history: History = window.history;

  constructor(rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }

    this._rootQuery = rootQuery;

    Router._instance = this;
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    // route.render(route, pathname);
    route.render();
  }

  static getInstance() {
    return Router._instance;
  }

  use(pathname: string, block: BlockType) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery} as RouteProps);

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = ((event: any) => {
      console.log(event);
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
