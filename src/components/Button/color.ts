import {
  gray000,
  gray100,
  gray200,
  gray500,
  gray600,
  gray700,
  gray800,
  orange000,
  orange100,
  orange200,
  orange600,
  red000,
  red100,
  red200,
  red600,
  white,
} from '../../Colors';
import { ThemeMode } from '../../Theme';
import { ButtonColor } from './interface';

export const defaultTextColors = {
  [ThemeMode.LIGHT]: gray800,
  [ThemeMode.DARK]: gray100,
};

export const textColors = {
  [ButtonColor.ORANGE]: white,
  [ButtonColor.ORANGE_LIGHT]: orange600,
  [ButtonColor.RED]: white,
  [ButtonColor.RED_LIGHT]: red600,
  [ButtonColor.WHITE]: gray800,
};

export const defaultBackgroundColors = {
  [ThemeMode.LIGHT]: gray000,
  [ThemeMode.DARK]: gray800,
};

export const backgroundColors = {
  [ButtonColor.ORANGE]: orange600,
  [ButtonColor.ORANGE_LIGHT]: orange000,
  [ButtonColor.RED]: red600,
  [ButtonColor.RED_LIGHT]: red000,
  [ButtonColor.WHITE]: white,
};

export const disabledDefaultTextColors = {
  [ThemeMode.LIGHT]: gray200,
  [ThemeMode.DARK]: gray700,
};

export const disabledTextColors = {
  [ButtonColor.ORANGE]: white,
  [ButtonColor.ORANGE_LIGHT]: orange100,
  [ButtonColor.RED]: white,
  [ButtonColor.RED_LIGHT]: red100,
  [ButtonColor.WHITE]: gray200,
};

export const disabledDefaultBackgroundColors = {
  [ThemeMode.LIGHT]: gray000,
  [ThemeMode.DARK]: gray800,
};

export const disabledBackgroundColors = {
  [ButtonColor.ORANGE]: orange200,
  [ButtonColor.ORANGE_LIGHT]: orange000,
  [ButtonColor.RED]: red200,
  [ButtonColor.RED_LIGHT]: red000,
  [ButtonColor.WHITE]: white,
};

export const defaultTextButtonColors = {
  [ThemeMode.LIGHT]: gray600,
  [ThemeMode.DARK]: gray500,
};

export const textButtonColors = {
  [ButtonColor.ORANGE]: orange600,
  [ButtonColor.RED]: red600,
};

export const disabledDefaultTextButtonColors = {
  [ThemeMode.LIGHT]: gray200,
  [ThemeMode.DARK]: gray700,
};

export const disabledTextButtonColors = {
  [ButtonColor.ORANGE]: orange200,
  [ButtonColor.RED]: red100,
};
