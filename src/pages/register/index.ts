import Block from '../../modules/block';
import {formElementsDefinition, RegisterProps} from './register.model';
import template from './register.tmpl';
import AuthComponent from '../../components/auth';
import InputComponent from '../../components/input';
import {validateFormInput} from '../../utils/validation';
import FormComponent from '../../components/form';
import LinkComponent from '../../components/link';
import AppRoutes from '../../utils/app-routes';
import Router from '../../modules/router/router';

export default class Register extends Block<RegisterProps> {
  router = Router.getInstance();

  constructor() {
    super('page-register', template, {
      authForm: new AuthComponent({
        header: 'Регистрация',
        link: new LinkComponent({
          text: 'Войти',
          href: AppRoutes.LOGIN,
        }),
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
    this.router.go(AppRoutes.LOGIN);
  }

  handleFormInputValidate(formInput: HTMLInputElement): boolean {
    const formElement = formElementsDefinition.find((formElement) => formElement.name === formInput.name);

    if (formElement?.validatePattern) {
      return validateFormInput(formElement.validatePattern, formInput);
    }
    return true;
  }
}
