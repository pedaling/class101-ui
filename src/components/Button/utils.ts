import { ThemeMode } from '../../core/Theme';
import {
  backgroundColors,
  defaultBackgroundColors,
  defaultTextButtonColors,
  defaultTextColors,
  disabledBackgroundColors,
  disabledDefaultBackgroundColors,
  disabledDefaultTextColors,
  disabledTextButtonColors,
  disabledTextColors,
  textButtonColors,
  textColors,
  transparentTextColors,
} from './color';
import { ButtonColor, ButtonColorValue, ExcludedThemeColor, TextButtonColor, TextButtonColorValue } from './interface';

export function getButtonColors(color: ButtonColorValue, theme: ThemeMode) {
  if (color === ButtonColor.TRANSPARENT) {
    return {
      textColor: transparentTextColors[theme],
      backgroundColor: 'transparent',
      disabledTextColor: disabledDefaultTextColors[theme],
      disabledBackgroundColor: 'transparent',
    };
  }
  if (color === ButtonColor.DEFAULT) {
    return {
      textColor: defaultTextColors[theme],
      backgroundColor: defaultBackgroundColors[theme],
      disabledTextColor: disabledDefaultTextColors[theme],
      disabledBackgroundColor: disabledDefaultBackgroundColors[theme],
    };
  }
  const excludeDefaultColor = color as ExcludedThemeColor<ButtonColor>;
  return {
    textColor: textColors[excludeDefaultColor],
    backgroundColor: backgroundColors[excludeDefaultColor],
    disabledTextColor: disabledTextColors[excludeDefaultColor],
    disabledBackgroundColor: disabledBackgroundColors[excludeDefaultColor],
  };
}

export const getTextButtonColors = (color: TextButtonColorValue, theme: ThemeMode) => {
  if (color === ButtonColor.DEFAULT) {
    return {
      textColor: defaultTextButtonColors[theme],
      disabledTextColor: disabledDefaultTextColors[theme],
    };
  }
  const excludeDefaultColor = color as ExcludedThemeColor<TextButtonColor>;
  return {
    textColor: textButtonColors[excludeDefaultColor],
    disabledTextColor: disabledTextButtonColors[excludeDefaultColor],
  };
};
