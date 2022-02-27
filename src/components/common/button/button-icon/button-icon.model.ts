export type ButtonIconProps = {
  name: string;
  icon: string;
  className?: string;
};

export type ButtonIconHandlers = {
  onClick?(event?: Event): void;
};
