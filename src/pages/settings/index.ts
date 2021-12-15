import Block from '../../modules/block';
import {SettingProps, settingsFormElementsDef} from './setting.model';
import template from './settings.tmpl';
import InputComponent from '../../components/input';
import ButtonCancelComponent from '../../components/button/button-cancel';
import FormComponent from '../../components/form';
import LinkComponent from '../../components/link';
import AppRoutes from '../../utils/app-routes';
import Router from '../../modules/router/router';

export default class Settings extends Block<SettingProps> {
  router = Router.getInstance();

  constructor() {
    super('page-settings', template, {
      avatar: 'avatar',
      oldPassword: 'Старый пароль',
      newPassword: 'Новый пароль',
      changeInfoLink: new LinkComponent({
        text: 'Изменить данные',
        href: AppRoutes.SETTINGS_EDIT,
      }),
      changePasswordLink: new LinkComponent({
        text: 'Изменить пароль',
        href: AppRoutes.SETTINGS_EDIT_PASSWORD,
      }),
      exitLink: new LinkComponent({
        text: 'Выход',
        href: AppRoutes.LOGIN,
      }),
      display_name: 'Имя',
      buttonCancel: new ButtonCancelComponent(
        {},
        {
          onClick: (e: Event) => this.handleClickCancel(e),
        },
      ),
      form: new FormComponent(
        {
          formName: 'settings-form',
          formInputs: settingsFormElementsDef.map((formElement) => {
            return new InputComponent({
              name: formElement.name,
              label: formElement.label,
              type: formElement.type,
              value: formElement.value,
              placeholder: formElement.placeholder,
              disabled: true,
            });
          }),
        },
        {},
      ),
    });
  }

  handleClickCancel() {
    this.router.go(AppRoutes.MESSENGER);
  }
}
