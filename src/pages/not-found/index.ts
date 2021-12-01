import Block from '../../modules/block';
import {displayPage} from '../../utils/display-page';
import {INotFoundProps} from './not-found.model';
import template from './not-found.tmpl';
import ErrorComponent from '../../components/error';

export class NotFound extends Block<INotFoundProps> {
  constructor() {
    super('page-not-found', template, {
      error: new ErrorComponent({
        statusCode: '404',
        text: 'Страница не найдена',
      }),
    });
  }
}

const page = new NotFound();
displayPage(page);
