export type ButtonSizeValue = 'lg' | 'md' | 'sm' | 'xs';
export enum ButtonSize {
  LARGE = 'lg',
  MEDIUM = 'md',
  SMALL = 'sm',
  XSMALL = 'xs',
}

export type ButtonColorValue =
  | 'default'
  | 'orange'
  | 'orangeLight'
  | 'red'
  | 'redLight'
  | 'white'
  | 'blue'
  | 'blueLight';

export enum ButtonColor {
  DEFAULT = 'default',
  ORANGE = 'orange',
  ORANGE_LIGHT = 'orangeLight',
  RED = 'red',
  RED_LIGHT = 'redLight',
  BLUE = 'blue',
  BLUE_LIGHT = 'blueLight',
  WHITE = 'white',
}

export type ExcludeDefaultColor = Exclude<ButtonColor, ButtonColor.DEFAULT>;

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

export type ExcludeDefaultTextButtonColor = Exclude<TextButtonColor, TextButtonColor.DEFAULT>;
