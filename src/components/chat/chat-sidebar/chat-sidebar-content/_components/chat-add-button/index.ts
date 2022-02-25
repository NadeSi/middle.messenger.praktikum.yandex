import {Component} from '../../../../../../modules/component';
import {ChatAddButtonProps, ChatAddButtonHandlers} from './chat-add-button.model';
import template from './chat-add-button.tmpl';

import './chat-add-button.scss';

class ChatAddButtonComponent extends Component {
  handlers: ChatAddButtonHandlers;

  constructor(props: ChatAddButtonProps, handlers: ChatAddButtonHandlers) {
    super('chat-add-button', template, props);

    this.handlers = handlers;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.handlers.onClick && this.handlers.onClick(event);
  }

  afterRender = (parentElement: HTMLElement) => {
    const buttonAdd: Element = parentElement
      ?.getElementsByClassName('chat-add-button')
      ?.namedItem(this.props.name) as Element;

    buttonAdd && this.handleClick && buttonAdd.addEventListener('click', this.handleClick.bind(this));
  };
}

export {ChatAddButtonHandlers};
export default ChatAddButtonComponent;
