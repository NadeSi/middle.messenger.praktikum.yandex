export type ButtonProps = {
  name: string;
  className?: string;
  text?: string;
};

export type ButtonHandlers = {
  onClick?(event: Event): void;
};
