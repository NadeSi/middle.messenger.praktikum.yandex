import Block from '../../modules/block';
import {displayPage} from '../../utils/display-page';
import {ServerErrorProps} from './server-error.model';
import template from './server-error.tmpl';
import ErrorComponent from '../../components/error';

export class NotFound extends Block<ServerErrorProps> {
  constructor() {
    super('page-server-error', template, {
      error: new ErrorComponent({
        statusCode: '500',
        text: 'Мы уже устраняем неисправность, попробуйте обновить страницу позже.',
      }),
    });
  }
}

const page = new NotFound();
displayPage(page);
