type AvatarInnerProps = {
  name: string;
  isEditMode: boolean;
  imgSrc?: string;
};

export type AvatarOuterProps = {
  name: AvatarInnerProps['name'];
  isEditMode?: AvatarInnerProps['isEditMode'];
  avatar?: AvatarInnerProps['imgSrc'];
};

export type AvatarProps = AvatarInnerProps & AvatarOuterProps;

export type AvatarHandlers = {
  onChangeAvatar?(file: File): void;
};
