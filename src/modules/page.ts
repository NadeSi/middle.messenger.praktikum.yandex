import Block from './block/block';
import appRouteTransitions from '../utils/app-router/app-route-transitions';
import isEqual from '../utils/helpers/isEqual';
import {CurrentUserItem} from '../models/auth';

export default class Page<T extends Record<string, unknown> = any> extends Block<T> {
  constructor(tagName: string, template: string, props: T) {
    super(tagName, template, props);
  }

  afterRender(parentElement?: HTMLElement) {
    appRouteTransitions();
  }

  componentDidUpdate(oldProps: T, newProps: T) {
    if (!isEqual(<CurrentUserItem>oldProps.currentUser, <CurrentUserItem>newProps.currentUser)) {
      appRouteTransitions();
    }

    return true;
  }
}
