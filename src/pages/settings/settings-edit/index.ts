import Block from '../../../modules/block';
import {displayPage} from '../../../utils/display-page';
import {SettingEditProps, settingsFormElementsDef} from '../setting.model';
import template from './settings-edit.tmpl';
import InputComponent from '../../../components/input';
import ButtonCancelComponent from '../../../components/button/button-cancel';
import FormComponent from '../../../components/form';
import {validateFormInput} from '../../../utils/validation';

export class SettingsEdit extends Block<SettingEditProps> {
  constructor() {
    super('page-settings-edit', template, {
      buttonCancel: new ButtonCancelComponent(),
      form: new FormComponent(
        {
          formName: 'settings-edit-form',
          buttonSubmitText: 'Сохранить',
          formInputs: settingsFormElementsDef.map((formElement) => {
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

    settingsFormElementsDef.forEach((item) => {
      data[item.name] = formData.get(item.name);
    });

    console.log(data);
  }

  handleFormInputValidate(formInput: HTMLInputElement): boolean {
    const formElement = settingsFormElementsDef.find((formElement) => formElement.name === formInput.name);

    if (formElement?.validatePattern) {
      return validateFormInput(formElement.validatePattern, formInput);
    }
    return true;
  }
}

const page = new SettingsEdit();
displayPage(page);
