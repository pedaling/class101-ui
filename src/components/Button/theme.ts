import {
  gray000,
  gray200,
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
import { ButtonVariant } from './interface';

export const defaultTextColors = {
  [ThemeMode.LIGHT]: gray800,
  [ThemeMode.DARK]: white,
};

export const textColors = {
  [ButtonVariant.ORANGE]: white,
  [ButtonVariant.ORANGE_LIGHT]: orange600,
  [ButtonVariant.RED]: white,
  [ButtonVariant.RED_LIGHT]: red600,
};

export const defaultBackgroundColors = {
  [ThemeMode.LIGHT]: gray000,
  [ThemeMode.DARK]: gray800,
};

export const backgroundColors = {
  [ButtonVariant.ORANGE]: orange600,
  [ButtonVariant.ORANGE_LIGHT]: orange000,
  [ButtonVariant.RED]: red600,
  [ButtonVariant.RED_LIGHT]: red000,
};

export const disabledDefaultTextColors = {
  [ThemeMode.LIGHT]: gray200,
  [ThemeMode.DARK]: gray700,
};

export const disabledTextColors = {
  [ButtonVariant.ORANGE]: white,
  [ButtonVariant.ORANGE_LIGHT]: orange100,
  [ButtonVariant.RED]: white,
  [ButtonVariant.RED_LIGHT]: red100,
};

export const disabledDefaultBackgroundColors = {
  [ThemeMode.LIGHT]: gray000,
  [ThemeMode.DARK]: gray800,
};

export const disabledBackgroundColors = {
  [ButtonVariant.ORANGE]: orange200,
  [ButtonVariant.ORANGE_LIGHT]: orange000,
  [ButtonVariant.RED]: red200,
  [ButtonVariant.RED_LIGHT]: red000,
};
