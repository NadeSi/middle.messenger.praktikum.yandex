import {Component} from '../../../modules/component';
import {MessagesTopPanelHandlers, MessagesTopPanelOuterProps, MessagesTopPanelProps} from './messages-top-panel.model';
import template from './messages-top-panel.tmpl';

import AvatarComponent from '../../common/avatar';

import './messages-top-panel.scss';

class MessagesTopPanelComponent extends Component<MessagesTopPanelProps> {
  handlers: MessagesTopPanelHandlers;

  constructor(props: MessagesTopPanelOuterProps, handlers: MessagesTopPanelHandlers) {
    super('messages-top-panel', template, {
      ...props,
      avatarElement: new AvatarComponent({
        name: 'messages-top-panel-avatar',
        avatar: props.avatar,
      }),
    });

    this.handlers = handlers;
    this.handleClickHeader = this.handleClickHeader.bind(this);
  }

  afterRender = (parentElement: HTMLElement) => {
    const title: Element = parentElement?.getElementsByClassName('title')[0];
    title && title.addEventListener('click', this.handleClickHeader.bind(this));
  };

  componentDidUpdate(oldProps: MessagesTopPanelProps, newProps: MessagesTopPanelProps): boolean {
    if (oldProps.avatar !== newProps.avatar) {
      this.props.avatarElement.setProps({avatar: newProps.avatar});
    }

    return true;
  }

  handleClickHeader(event: Event) {
    event.preventDefault();
    this.handlers.onClickHeader();
  }
}

export {MessagesTopPanelOuterProps as MessagesTopPanelProps, MessagesTopPanelHandlers};
export default MessagesTopPanelComponent;
