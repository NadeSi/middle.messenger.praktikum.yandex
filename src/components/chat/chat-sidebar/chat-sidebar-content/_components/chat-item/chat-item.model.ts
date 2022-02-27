import {ChatItem} from '../../../../../../models/chat';
import AvatarComponent from '../../../../../common/avatar';
import ButtonIconComponent from '../../../../../common/button/button-icon';

type ChatItemInnerProps = ChatItem & {
  lastMessageDate: string;
  avatarElement: AvatarComponent;
  buttonDeleteItem?: ButtonIconComponent;
};

export type ChatItemOuterProps = ChatItem & {
  buttonDeleteItem?: ButtonIconComponent;
};

export type ChatItemProps = ChatItemInnerProps & ChatItemOuterProps;

export type ChatItemHandlers = {
  onClickChatItem?(id: ChatItemProps['id']): void;
  onClickDeleteItem?(id: ChatItemProps['id']): void;
};
