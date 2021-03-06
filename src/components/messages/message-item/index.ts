import Handlebars from 'handlebars';
import {Component} from '../../../modules/component';
import {MessageItemProps} from './message-item.model';
import template from './message-item.tmpl';

import {AuthController} from '../../../controllers/auth';
import {getMessageDate} from '../../../utils/message-date';

import './message-item.scss';

class MessageItemComponent extends Component<MessageItemProps> {
  constructor(props: MessageItemProps) {
    Handlebars.registerHelper('isCurrentUser', function (userId) {
      return userId === AuthController.getCurrentUser()?.id;
    });

    super('message-item', template, {
      ...props,
      time: getMessageDate(props.date),
    });
  }
}

export default MessageItemComponent;
