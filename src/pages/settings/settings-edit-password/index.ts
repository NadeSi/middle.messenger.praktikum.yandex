import Block from '../../../modules/block';
import {SettingEditProps, settingsPasswordsFormElementsDef} from '../setting.model';
import template from './settings-edit-password.tmpl';
import InputComponent from '../../../components/input';
import ButtonCancelComponent from '../../../components/button/button-cancel';
import FormComponent from '../../../components/form';
import {validateFormInput} from '../../../utils/validation';
import Router from '../../../modules/router/router';
import AppRoutes from '../../../utils/app-routes';

export default class SettingsEditPassword extends Block<SettingEditProps> {
  router = Router.getInstance();

  constructor() {
    super('page-settings-edit-password', template, {
      buttonCancel: new ButtonCancelComponent(
        {},
        {
          onClick: (e: Event) => this.handleClickCancel(e),
        },
      ),
      form: new FormComponent(
        {
          formName: 'settings-edit-form',
          buttonSubmitText: 'Сохранить',
          formInputs: settingsPasswordsFormElementsDef.map((formElement) => {
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
    });
  }

  handleSubmit(formData: FormData) {
    const data: Record<string, unknown> = {};

    settingsPasswordsFormElementsDef.forEach((item) => {
      data[item.name] = formData.get(item.name);
    });

    console.log(data);
    this.goBack();
  }

  handleFormInputValidate(formInput: HTMLInputElement): boolean {
    const formElement = settingsPasswordsFormElementsDef.find((formElement) => formElement.name === formInput.name);

    if (formElement?.validatePattern) {
      return validateFormInput(formElement.validatePattern, formInput);
    }
    return true;
  }

  handleClickCancel() {
    this.goBack();
  }

  goBack() {
    this.router.go(AppRoutes.SETTINGS);
  }
}
