import Block from '../../modules/block';
import {displayPage} from '../../utils/display-page';
import {LoginProps, formElementsDefinition} from './login.model';
import template from './login.tmpl';
import AuthComponent from '../../components/auth';
import InputComponent from '../../components/input';
import FormComponent from '../../components/form';
import {validateFormInput} from '../../utils/validation';

export class Login extends Block<LoginProps> {
  constructor() {
    super('page-login', template, {
      authForm: new AuthComponent({
        header: 'Вход',
        linkText: 'Регистрация',
        form: new FormComponent(
          {
            formName: 'login-form',
            buttonSubmitText: 'Войти',
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

const page = new Login();
displayPage(page);
