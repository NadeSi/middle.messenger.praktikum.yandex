import Block from '../../modules/block';
import {ServerErrorProps} from './server-error.model';
import template from './server-error.tmpl';
import ErrorComponent from '../../components/error';
import Page from '../../modules/page';

export default class ServerError extends Page<ServerErrorProps> {
  constructor() {
    super('page-server-error', template, {
      error: new ErrorComponent({
        statusCode: '500',
        text: 'Мы уже устраняем неисправность, попробуйте обновить страницу позже.',
      }),
    });
  }
}
