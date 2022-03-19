import {Component} from '../../modules/component';
import {FormProps, FormOuterProps, FormHandlers} from './form.model';
import template from './form.tmpl';

import InputComponent, {IInputProps} from '../common/input';
import isEqual from '../../utils/helpers/isEqual';

import './form.scss';

class FormComponent extends Component<FormProps> {
  handlers: FormHandlers;

  constructor(props: FormOuterProps, handlers: FormHandlers) {
    super('form', template, props);

    this.props.formInputs = this.props.formInputsModel.map((formElement: IInputProps) => {
      const value =
        this.props.formInputValues && this.props.formInputValues[formElement.name]
          ? this.props.formInputValues[formElement.name]
          : formElement.value;
      return new InputComponent({...formElement, value});
    });

    this.handlers = handlers;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(oldProps: FormProps, newProps: FormProps) {
    if (!isEqual(oldProps.formInputValues, newProps.formInputValues)) {
      //TODO не перерерисовывать полностью
      this.setProps({
        formInputs: this.props.formInputsModel.map((formElement: IInputProps) => {
          const value =
            this.props.formInputValues && this.props.formInputValues[formElement.name]
              ? this.props.formInputValues[formElement.name]
              : formElement.value;
          return new InputComponent({...formElement, value});
        }),
      });
    }

    return true;
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
    const formInputs = formElements?.getElementsByTagName('input');

    this.handleSubmit && formElements && formElements.addEventListener('submit', this.handleSubmit.bind(this));

    if (this.handleValidateInput && formInputs) {
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
