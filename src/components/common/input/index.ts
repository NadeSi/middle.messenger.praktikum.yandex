import {Component} from '../../../modules/component';
import {IInputHandler, IInputProps} from './input.model';
import template from './input.tmpl';

import './input.scss';

class InputComponent extends Component {
  handlers: IInputHandler;

  constructor(props: IInputProps, handlers: IInputHandler = {}) {
    super('input', template, props);

    this.handlers = handlers;
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event: Event) {
    //TODO возможно нужна задержка при отправке запроса
    this.handlers.onInput && this.handlers.onInput(event.target?.value);
  }

  afterRender = (parentElement: HTMLElement) => {
    const inputElement: Element = parentElement?.getElementsByClassName('input').namedItem(this.props.name) as Element;

    this.handleInput && inputElement && inputElement.addEventListener('input', this.handleInput.bind(this));
  };
}

export type {IInputProps};
export default InputComponent;
