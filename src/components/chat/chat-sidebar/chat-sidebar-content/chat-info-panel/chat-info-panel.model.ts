import {ActiveChat} from '../../../../../models/chat';
import ChatAddButtonComponent, {ChatAddButtonHandlers} from '../_components/chat-add-button';
import ChatItemListComponent from '../_components/chat-item-list';
import AvatarComponent from '../../../../common/avatar';
import ButtonIconComponent, {ButtonIconHandlers} from '../../../../common/button/button-icon';

type ChatInfoPanelInnerProps = {
  title: string;
  buttonShowUsersPanel: ChatAddButtonComponent;
  buttonCancelPanel: ButtonIconComponent;
  buttonDeleteChat: ButtonIconComponent;
  avatarElement: AvatarComponent;
  chatItemList: ChatItemListComponent;
};

export type ChatInfoPanelOuterProps = {
  activeChat?: ActiveChat;
};

export type ChatInfoPanelProps = ChatInfoPanelInnerProps & ChatInfoPanelOuterProps;

export type ChatInfoPanelHandlers = {
  onClickButtonShowUsersPanel: ChatAddButtonHandlers['onClick'];
  onClickButtonCancelPanel: ButtonIconHandlers['onClick'];
  onClickButtonDeleteChat?(chatId: number): void;
};
