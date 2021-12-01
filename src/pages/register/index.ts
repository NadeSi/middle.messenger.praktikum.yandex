import Block from '../../modules/block';
import {displayPage} from '../../utils/display-page';
import {formElementsDefinition, IRegisterProps} from './register.model';
import template from './register.tmpl';
import AuthComponent from '../../components/auth';
import InputComponent from '../../components/input';
import {validateFormInput} from '../../utils/validation';
import FormComponent from '../../components/form';

export class Register extends Block<IRegisterProps> {
  constructor() {
    super('page-register', template, {
      authForm: new AuthComponent({
        header: 'Регистрация',
        linkText: 'Войти',
        form: new FormComponent(
          {
            formName: 'register-form',
            buttonSubmitText: 'Зарегистрироваться',
            formInputs: formElementsDefinition.map((formElement) => {
              return new InputComponent({
                name: formElement.name,
                label: formElement.label,
                type: formElement.type,
                value: formElement.value,
                placeholder: formElement.placeholder,
              });
            }),
          },
          {
            onSubmit: (formData: FormData) => this.handleSubmit(formData),
            validateFormInput: (formInput: HTMLInputElement) => this.handleFormInputValidate(formInput),
          },
        ),
      }),
    });
  }

  handleSubmit(formData: FormData) {
    const data = {
      login: formData.get('login'),
      email: formData.get('email'),
      first_name: formData.get('first_name'),
      phone: formData.get('phone'),
      password: formData.get('password'),
    };
    console.log(data);
  }

  handleFormInputValidate(formInput: HTMLInputElement): boolean {
    const formElement = formElementsDefinition.find((formElement) => formElement.name === formInput.name);

    if (formElement?.validatePattern) {
      return validateFormInput(formElement.validatePattern, formInput);
    }
    return true;
  }
}

const page = new Register();
displayPage(page);
