import {Component} from '../../../modules/component';
import {AvatarProps, AvatarHandlers, AvatarOuterProps} from './avatar.model';
import template from './avatar.tmpl';

import './avatar.scss';

class AvatarComponent extends Component<AvatarProps> {
  handlers: AvatarHandlers;

  constructor(props: AvatarOuterProps, handlers: AvatarHandlers = {}) {
    super('avatar', template, {
      ...props,
      isEditMode: props.isEditMode !== undefined ? props.isEditMode : false,
      imgSrc: AvatarComponent.getImgSrc(props.avatar),
    });

    this.handlers = handlers;
  }

  static getImgSrc = (avatar: AvatarOuterProps['avatar']) => {
    return avatar ? `https://ya-praktikum.tech/api/v2/resources${avatar}` : '';
  };

  afterRender = (parentElement: HTMLElement) => {
    const avatarElement: Element = parentElement
      ?.getElementsByTagName('div')
      .namedItem(`${this.props.name}`) as Element;

    avatarElement && avatarElement.addEventListener('click', this.handleClickAvatar.bind(this));

    const inputElement: Element = parentElement
      ?.getElementsByTagName('input')
      .namedItem(`file-input-${this.props.name}`) as Element;

    this.handleChangeAvatar &&
      inputElement &&
      inputElement.addEventListener('change', this.handleChangeAvatar.bind(this));
  };

  componentDidUpdate(oldProps: AvatarProps, newProps: AvatarProps) {
    if (oldProps.avatar !== newProps.avatar) {
      this.setProps({imgSrc: AvatarComponent.getImgSrc(newProps.avatar)});
    }

    return true;
  }

  handleClickAvatar = (event: Event) => {
    if (this.props.isEditMode) {
      const inputElement: HTMLElement = document.getElementById(`file-input-${this.props.name}`) as HTMLElement;
      inputElement && inputElement.click();
    }
  };

  handleChangeAvatar = (event: Event) => {
    if (this.props.isEditMode) {
      const files = (event.target as HTMLInputElement)?.files;
      files && files.length > 0 && this.handlers.onChangeAvatar && this.handlers.onChangeAvatar(files[0]);
    }
  };
}

export type {AvatarHandlers};
export default AvatarComponent;
