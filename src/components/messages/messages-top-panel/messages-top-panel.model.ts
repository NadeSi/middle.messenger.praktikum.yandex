import AvatarComponent from '../../common/avatar';

export type MessagesTopPanelInnerProps = {
  title: string;
  avatarElement: AvatarComponent;
};

export type MessagesTopPanelOuterProps = {
  title: MessagesTopPanelInnerProps['title'];
  avatar: string;
};

export type MessagesTopPanelProps = MessagesTopPanelInnerProps & MessagesTopPanelOuterProps;

export type MessagesTopPanelHandlers = {
  onClickHeader(): void;
};
