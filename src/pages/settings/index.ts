import Block from '../../modules/block';
import {displayPage} from '../../utils/display-page';
import {ISettingProps, settingsFormElementsDef} from './setting.model';
import template from './settings.tmpl';
import InputComponent from '../../components/input';
import ButtonCancelComponent from '../../components/button/button-cancel';
import FormComponent from '../../components/form';

export class Settings extends Block<ISettingProps> {
  constructor() {
    super('page-settings', template, {
      avatar: 'avatar',
      oldPassword: 'Старый пароль',
      newPassword: 'Новый пароль',
      changeInfoText: 'Изменить данные',
      changePasswordText: 'Изменить пароль',
      exitText: 'Выход',
      display_name: 'Имя',
      buttonCancel: new ButtonCancelComponent(),
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
}

const page = new Settings();
displayPage(page);
