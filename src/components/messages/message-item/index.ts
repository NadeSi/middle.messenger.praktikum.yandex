import Handlebars from 'handlebars';
import {Component} from '../../../modules/component';
import {IMessageItem} from './message-item.model';
import template from './message-item.tmpl';

import './message-item.scss';

class MessageItemComponent extends Component {
  constructor(props: IMessageItem) {
    Handlebars.registerHelper('isCurrentUser', function (userLogin) {
      //TODO научиться определять текущего пользователя
      return userLogin === 'alex';
    });

    super('message-item', template, {
      ...props,
      time: `${props.date.getHours()}:${props.date.getMinutes()}`,
    });
  }
}

export {IMessageItem};
export default MessageItemComponent;
