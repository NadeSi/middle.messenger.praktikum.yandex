import {formElementsDefinition, RegisterProps} from './register.model';
import template from './register.tmpl';

import Page from '../../modules/page';
import {IState} from '../../modules/store';
import connect from '../../modules/connect';
import Router from '../../modules/router/router';
import AppRoutes from '../../utils/app-router/app-routes';
import {validateFormInput} from '../../utils/validation';
import {AuthController} from '../../controllers/auth';
import AuthComponent from '../../components/auth';
import FormComponent, {getFormKeys} from '../../components/form';
import LinkComponent from '../../components/common/link';
import {getFormValues} from '../../components/form';
import {AuthItem} from '../../models/auth';

class Register extends Page<RegisterProps> {
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
            formInputsModel: formElementsDefinition,
            formInputValues: getFormValues(formElementsDefinition),
          },
          {
            onSubmit: (e) => this.handleSubmit(e),
            validateFormInput: (e) => this.handleFormInputValidate(e),
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

    AuthController.register(<AuthItem>data);
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

export default connect(Register, mapStateToProps);
