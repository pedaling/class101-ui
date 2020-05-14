import { rgba } from 'polished';

import {
  blue000,
  blue100,
  blue200,
  blue500,
  gray000,
  gray100,
  gray200,
  gray500,
  gray700,
  gray800,
  gray900,
  orange000,
  orange100,
  orange200,
  orange500,
  red000,
  red100,
  red500,
  white,
} from '../../core/Colors';
import { ThemeMode } from '../../core/Theme';
import { ButtonColor } from './interface';

export const defaultTextColors = {
  [ThemeMode.LIGHT]: gray900,
  [ThemeMode.DARK]: gray100,
};

export const transparentTextColors = {
  [ThemeMode.LIGHT]: gray900,
  [ThemeMode.DARK]: white,
};

export const textColors = {
  [ButtonColor.ORANGE]: white,
  [ButtonColor.ORANGE_LIGHT]: orange500,
  [ButtonColor.RED]: white,
  [ButtonColor.RED_LIGHT]: red500,
  [ButtonColor.BLUE]: white,
  [ButtonColor.BLUE_LIGHT]: blue500,
  [ButtonColor.WHITE]: gray800,
};

export const defaultBackgroundColors = {
  [ThemeMode.LIGHT]: gray000,
  [ThemeMode.DARK]: gray800,
};

export const backgroundColors = {
  [ButtonColor.ORANGE]: orange500,
  [ButtonColor.ORANGE_LIGHT]: orange000,
  [ButtonColor.RED]: red500,
  [ButtonColor.RED_LIGHT]: red000,
  [ButtonColor.BLUE]: blue500,
  [ButtonColor.BLUE_LIGHT]: blue000,
  [ButtonColor.WHITE]: white,
};

export const disabledDefaultTextColors = {
  [ThemeMode.LIGHT]: gray200,
  [ThemeMode.DARK]: gray700,
};

export const disabledTextColors = {
  [ButtonColor.ORANGE]: white,
  [ButtonColor.ORANGE_LIGHT]: orange200,
  [ButtonColor.RED]: white,
  [ButtonColor.RED_LIGHT]: red100,
  [ButtonColor.BLUE]: white,
  [ButtonColor.BLUE_LIGHT]: blue200,
  [ButtonColor.WHITE]: gray200,
};

export const disabledDefaultBackgroundColors = defaultBackgroundColors;

export const disabledBackgroundColors = {
  [ButtonColor.ORANGE]: orange100,
  [ButtonColor.ORANGE_LIGHT]: orange000,
  [ButtonColor.RED]: red100,
  [ButtonColor.RED_LIGHT]: red000,
  [ButtonColor.BLUE]: blue100,
  [ButtonColor.BLUE_LIGHT]: blue000,
  [ButtonColor.WHITE]: white,
};

export const defaultTextButtonColors = {
  [ThemeMode.LIGHT]: gray500,
  [ThemeMode.DARK]: gray500,
};

export const textButtonColors = {
  [ButtonColor.ORANGE]: orange500,
  [ButtonColor.RED]: red500,
  [ButtonColor.BLUE]: blue500,
  [ButtonColor.WHITE]: white,
};

export const disabledDefaultTextButtonColors = {
  [ThemeMode.LIGHT]: gray200,
  [ThemeMode.DARK]: gray700,
};

export const disabledTextButtonColors = {
  [ButtonColor.ORANGE]: orange200,
  [ButtonColor.RED]: red100,
  [ButtonColor.BLUE]: blue100,
  [ButtonColor.WHITE]: rgba(white, 0.2),
};
