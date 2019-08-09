export type ButtonSizeValue = 'lg' | 'md' | 'sm' | 'xs';
export enum ButtonSize {
  LARGE = 'lg',
  MEDIUM = 'md',
  SMALL = 'sm',
  XSMALL = 'xs',
}

export type ButtonColorValue =
  | 'default'
  | 'transparent'
  | 'orange'
  | 'orangeLight'
  | 'red'
  | 'redLight'
  | 'white'
  | 'blue'
  | 'blueLight';

export enum ButtonColor {
  DEFAULT = 'default',
  TRANSPARENT = 'transparent',
  ORANGE = 'orange',
  ORANGE_LIGHT = 'orangeLight',
  RED = 'red',
  RED_LIGHT = 'redLight',
  BLUE = 'blue',
  BLUE_LIGHT = 'blueLight',
  WHITE = 'white',
}

export type ContainButtonSizeValue = 'lg' | 'md' | 'sm' | 'xs';
export type ContainButtonColorValue =
  | 'default'
  | 'orange'
  | 'orangeLight'
  | 'red'
  | 'redLight'
  | 'white'
  | 'blue'
  | 'blueLight';

export type IconButtonSizeValue = 'sm' | 'xs';
export enum IconButtonSize {
  SMALL = 'sm',
  XSMALL = 'xs',
}
export type IconButtonColorValue = ButtonColorValue;

export type TextButtonSizeValue = 'lg' | 'md' | 'sm';
export enum TextButtonSize {
  LARGE = 'lg',
  MEDIUM = 'md',
  SMALL = 'sm',
}

export type TextButtonColorValue = 'default' | 'orange' | 'red' | 'white' | 'blue';
export enum TextButtonColor {
  DEFAULT = 'default',
  ORANGE = 'orange',
  RED = 'red',
  BLUE = 'blue',
  WHITE = 'white',
}

export type ExcludedThemeColor<T> = Exclude<T, 'default'> & Exclude<T, 'transparent'>;
