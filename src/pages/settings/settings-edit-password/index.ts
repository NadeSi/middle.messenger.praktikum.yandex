import Settings, {mapStateToProps} from '../settings-common';
import AppRoutes from '../../../utils/app-router/app-routes';
import {SettingConnectProps, SettingOuterProps, settingsPasswordsFormElementsDef} from '../setting.model';
import connect from '../../../modules/connect';
import UserController, {UserPasswordData} from '../../../controllers/user/user.controller';

class SettingsEditPassword extends Settings<SettingOuterProps> {
  constructor(connectProps: SettingConnectProps) {
    super({...connectProps, settingsFormElementsDef: settingsPasswordsFormElementsDef, buttonSubmitText: 'Сохранить'});
  }

  handleClickCancel() {
    this.handleRoute(AppRoutes.SETTINGS);
  }

  handleFormSubmit(formData: FormData) {
    const data: Record<string, any> = {};

    this.props.formKeys.forEach((formKey) => {
      data[formKey] = formData.get(formKey) as string;
    });

    UserController.changeUserPassword(<UserPasswordData>data)
      .then(() => {
        //TODO очищать форму
        this.handleClickCancel();
      })
      .catch((e) => console.log(e));
  }
}

export default connect(SettingsEditPassword, mapStateToProps);
