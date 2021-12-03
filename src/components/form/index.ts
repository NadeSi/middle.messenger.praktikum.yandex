import {Component} from '../../modules/component';
import {IFormHandlers, IFormProps} from './form.model';
import template from './form.tmpl';

import './form.scss';

class FormComponent extends Component {
  handlers: IFormHandlers;

  constructor(props: IFormProps, handlers: IFormHandlers) {
    super('form', template, props);

    this.handlers = handlers;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    this.handleValidateForm(formData, form) && this.handlers.onSubmit && this.handlers.onSubmit(formData);
  }

  handleValidateForm(formData: FormData, form: HTMLFormElement): boolean {
    let isValid = true;
    const data = Object.fromEntries(formData);

    for (const key in data) {
      if (!this.handleValidateInput(form.elements.namedItem(key) as Element)) {
        isValid = false;
      }
    }

    return isValid;
  }

  handleValidateInput(element: Element): boolean {
    if (this.handlers.validateFormInput) {
      return this.handlers.validateFormInput(element as HTMLInputElement);
    }
    return true;
  }

  afterRender = (parentElement: HTMLElement) => {
    const formElements: HTMLFormElement = parentElement?.getElementsByTagName('form')[0];
    const formInputs = formElements.getElementsByTagName('input');

    this.handleSubmit && formElements.addEventListener('submit', this.handleSubmit.bind(this));

    if (this.handleValidateInput) {
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].addEventListener('blur', (event: FocusEvent) =>
          this.handleValidateInput(event.target as HTMLInputElement),
        );
        formInputs[i].addEventListener('focus', (event: FocusEvent) =>
          this.handleValidateInput(event.target as HTMLInputElement),
        );
      }
    }
  };
}

export default FormComponent;
