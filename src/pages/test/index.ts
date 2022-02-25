import Block from '../../modules/block';
import template from './test.tmpl';
import AppRoutes from '../../utils/app-router/app-routes';

type TestPageType = {appRoutes: typeof AppRoutes};

export default class TestPage extends Block<TestPageType> {
  constructor() {
    super('page-test', template, {appRoutes: AppRoutes});
  }
}
