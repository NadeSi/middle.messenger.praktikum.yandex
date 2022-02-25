import Settings, {mapStateToProps} from '../settings-common';
import AppRoutes from '../../../utils/app-router/app-routes';
import {SettingConnectProps, SettingOuterProps, settingsEditFormElementsDef} from '../setting.model';
import connect from '../../../modules/connect';
import UserController from '../../../controllers/user/user.controller';
import {UserItem} from '../../../models/user';

class SettingsEdit extends Settings<SettingOuterProps> {
  constructor(connectProps: SettingConnectProps) {
    super({...connectProps, settingsFormElementsDef: settingsEditFormElementsDef, buttonSubmitText: 'Сохранить'});
  }

  handleClickCancel() {
    this.handleRoute(AppRoutes.SETTINGS);
  }

  handleFormSubmit(formData: FormData) {
    const data: Record<string, unknown> = {};

    this.props.formKeys.forEach((formKey) => {
      data[formKey] = formData.get(formKey) as string;
    });

    UserController.changeUserProfile(<UserItem>data)
      .then(() => {
        this.handleClickCancel();
      })
      .catch((e) => console.log(e));
  }
}

export default connect(SettingsEdit, mapStateToProps);
