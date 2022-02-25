import Block from '../../modules/block';
import {NotFoundProps} from './not-found.model';
import template from './not-found.tmpl';
import ErrorComponent from '../../components/error';
import Page from '../../modules/page';

export default class NotFound extends Page<NotFoundProps> {
  constructor() {
    super('page-not-found', template, {
      error: new ErrorComponent({
        statusCode: '404',
        text: 'Страница не найдена',
      }),
    });
  }
}
