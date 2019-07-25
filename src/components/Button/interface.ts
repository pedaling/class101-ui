import { ThemeConfig } from 'Theme';

export type ButtonSizeValue = 'lg' | 'md' | 'sm' | 'xs';
export enum ButtonSize {
  LARGE = 'lg',
  MEDIUM = 'md',
  SMALL = 'sm',
  XSMALL = 'xs',
}

export type ButtonVariantValue = 'default' | 'orange' | 'orangeLight' | 'red' | 'redLight';
export enum ButtonVariant {
  DEFAULT = 'default',
  ORANGE = 'orange',
  ORANGE_LIGHT = 'orangeLight',
  RED = 'red',
  RED_LIGHT = 'redLight',
}

export type ExcludeDefaultVariant = Exclude<ButtonVariant, ButtonVariant.DEFAULT>;

export interface ButtonContentProps {
  buttonSize: ButtonSizeValue;
  variant: ButtonVariantValue;
  theme: ThemeConfig;
}
