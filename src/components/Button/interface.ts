import { ThemeConfig } from 'Theme';

export enum ButtonSize {
  LARGE = 'lg',
  MEDIUM = 'md',
  SMALL = 'sm',
  XSMALL = 'xs',
}

export enum ButtonVariant {
  DEFAULT = 'DEFAULT',
  ORANGE = 'ORANGE',
  ORANGE_LIGHT = 'ORANGE_LIGHT',
  RED = 'RED',
  RED_LIGHT = 'RED_LIGHT',
}

export type ExcludeDefaultVariant = Exclude<ButtonVariant, ButtonVariant.DEFAULT>;

export interface ButtonContentProps {
  buttonSize: ButtonSize;
  variant: ButtonVariant;
  theme: ThemeConfig;
}
