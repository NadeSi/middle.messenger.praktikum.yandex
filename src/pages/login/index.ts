import {formElementsDefinition, LoginPageProps} from './login.model';
import template from './login.tmpl';
import AuthComponent from '../../components/auth';
import FormComponent from '../../components/form';
import {getFormKeys, getFormValues} from '../../components/form/form.model';
import {validateFormInput} from '../../utils/validation';
import LinkComponent from '../../components/common/link';
import AppRoutes from '../../utils/app-router/app-routes';
import Router from '../../modules/router/router';
import {AuthController} from '../../controllers/auth';
import {IState} from '../../modules/store';
import connect from '../../modules/connect';
import Page from '../../modules/page';
import {AuthLoginItem} from '../../models/auth';

class Login extends Page<LoginPageProps> {
  router = Router.getInstance();

  constructor() {
    super('page-login', template, {
      authForm: new AuthComponent({
        header: 'Вход',
        link: new LinkComponent({
          text: 'Регистрация',
          href: AppRoutes.REGISTER,
        }),
        form: new FormComponent(
          {
            formName: 'login-form',
            buttonSubmitText: 'Войти',
            formInputsModel: formElementsDefinition.map((formElement) => {
              return {
                ...formElement,
              };
            }),
            formInputValues: getFormValues(formElementsDefinition),
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
    const data: Record<string, unknown> = {};

    getFormKeys(formElementsDefinition).forEach((formKey) => {
      data[formKey] = formData.get(formKey) as string;
    });

    AuthController.login(<AuthLoginItem>data);
  }

  handleFormInputValidate(formInput: HTMLInputElement): boolean {
    const formElement = formElementsDefinition.find((formElement) => formElement.name === formInput.name);

    if (formElement?.validatePattern) {
      return validateFormInput(formElement.validatePattern, formInput);
    }
    return true;
  }
}

function mapStateToProps(state: IState) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(Login, mapStateToProps);
