import Block from '../../modules/block';
import {NotFoundProps} from './not-found.model';
import template from './not-found.tmpl';
import ErrorComponent from '../../components/error';

export default class NotFound extends Block<NotFoundProps> {
  constructor() {
    super('page-not-found', template, {
      error: new ErrorComponent({
        statusCode: '404',
        text: 'Страница не найдена',
      }),
    });
  }
}
