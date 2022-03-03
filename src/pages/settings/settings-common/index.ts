import template from './settings.tmpl';
import {SettingProps, SettingConnectProps, SettingOuterProps} from '../setting.model';

import Router from '../../../modules/router/router';
import Page from '../../../modules/page';
import {IState} from '../../../modules/store';

import ButtonCancelComponent from '../../../components/common/button/button-cancel';
import FormComponent, {getFormKeys, getFormValues} from '../../../components/form';
import AppRoutes from '../../../utils/app-router/app-routes';

import ButtonComponent from '../../../components/common/button/button';
import {AuthController} from '../../../controllers/auth';

import AvatarComponent from '../../../components/common/avatar';
import isEqual from '../../../utils/helpers/isEqual';
import {UserController} from '../../../controllers/user';
import {validateFormInput} from '../../../utils/validation';

import './setting.scss';

class Settings<T extends SettingOuterProps> extends Page<SettingProps> {
  router = Router.getInstance();

  constructor(props: T) {
    super('page-settings', template, {
      ...props,
      isViewMode: props.isViewMode !== undefined ? props.isViewMode : false,
      formKeys: getFormKeys(props.settingsFormElementsDef),
      avatarElement: new AvatarComponent(
        {
          name: 'page-settings-avatar',
          avatar: props.currentUser?.avatar || '',
          isEditMode: true,
        },
        {
          onChangeAvatar: (e) => this.handleChangeAvatar(e),
        },
      ),
      buttonChangeInfo: new ButtonComponent(
        {
          name: 'button-change-info',
          text: 'Изменить данные',
          className: 'button-setting',
        },
        {
          onClick: (e) => this.handleRoute(AppRoutes.SETTINGS_EDIT),
        },
      ),
      buttonChangePassword: new ButtonComponent(
        {
          name: 'button-change-password',
          text: 'Изменить пароль',
          className: 'button-setting',
        },
        {
          onClick: (e) => this.handleRoute(AppRoutes.SETTINGS_EDIT_PASSWORD),
        },
      ),
      buttonExit: new ButtonComponent(
        {
          name: 'button-exit',
          text: 'Выход',
          className: 'button-setting button-exit',
        },
        {
          onClick: (e) => this.handleClickLogout(e),
        },
      ),
      buttonCancel: new ButtonCancelComponent(
        {},
        {
          onClick: (e: Event) => this.handleClickCancel(),
        },
      ),
    });

    this.handleRoute = this.handleRoute.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleClickLogout = this.handleClickLogout.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleValidateFormInput = this.handleValidateFormInput.bind(this);

    this.props.form = new FormComponent(
      {
        formName: 'settings-form',
        formInputsModel: this.props.settingsFormElementsDef,
        formInputValues: getFormValues(this.props.settingsFormElementsDef, props.currentUser),
        buttonSubmitText: this.props.buttonSubmitText,
      },
      {
        onSubmit: this.handleFormSubmit,
        validateFormInput: this.handleValidateFormInput,
      },
    );
  }

  componentDidUpdate(oldProps: SettingProps, newProps: SettingProps) {
    if (!isEqual(oldProps.currentUser, newProps.currentUser)) {
      this.props.avatarElement.setProps({avatar: newProps.currentUser?.avatar});

      this.props.form?.setProps({
        formInputValues: getFormValues(this.props.settingsFormElementsDef, newProps.currentUser),
      });
    }

    return true;
  }

  private handleClickLogout(event: Event) {
    AuthController.logout();
  }

  private handleChangeAvatar(file: File) {
    UserController.changeUserAvatar(file);
  }

  handleRoute(route: AppRoutes) {
    this.router.go(route);
  }

  handleValidateFormInput(formInput: HTMLInputElement): boolean {
    const formElement = (this.props?.settingsFormElementsDef || []).find(
      (formElement) => formElement.name === formInput.name,
    );

    if (formElement?.validatePattern) {
      return validateFormInput(formElement.validatePattern, formInput);
    }
    return true;
  }

  /**
   * For implementation
   */
  handleClickCancel() {
    throw new Error('You have to implement the method handleClickCancel!');
  }

  handleFormSubmit(formData: FormData) {
    throw new Error('You have to implement the method handleFormSubmit!');
  }
}

export function mapStateToProps(state: IState): SettingConnectProps {
  return {
    currentUser: {...state.currentUser},
  } as SettingConnectProps;
}

export default Settings;
