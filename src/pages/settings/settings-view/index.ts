import connect from '../../../modules/connect';
import Settings, {mapStateToProps} from '../settings-common';
import {SettingConnectProps, SettingOuterProps, settingsViewFormElementsDef} from '../setting.model';
import AppRoutes from '../../../utils/app-router/app-routes';

class SettingsView extends Settings<SettingOuterProps> {
  constructor(connectProps: SettingConnectProps) {
    super({...connectProps, isViewMode: true, settingsFormElementsDef: settingsViewFormElementsDef});
  }

  handleClickCancel() {
    this.handleRoute(AppRoutes.MESSENGER);
  }
}

export default connect(SettingsView, mapStateToProps);
