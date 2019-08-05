import { css } from 'styled-components';

import { ThemeMode } from '../../Theme';
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
} from './color';
import {
  ButtonColor,
  ButtonColorValue,
  ButtonSize,
  ButtonSizeValue,
  ExcludeDefaultColor,
  ExcludeDefaultTextButtonColor,
} from './interface';

export const iconMarginByButtonSize: { [key in ButtonSize]: number } = {
  [ButtonSize.LARGE]: 4,
  [ButtonSize.MEDIUM]: 4,
  [ButtonSize.SMALL]: 4,
  [ButtonSize.XSMALL]: 2,
};

const buttonIconSizeByButtonSize: { [key in ButtonSize]: number } = {
  [ButtonSize.LARGE]: 24,
  [ButtonSize.MEDIUM]: 18,
  [ButtonSize.SMALL]: 18,
  [ButtonSize.XSMALL]: 16,
};

export const getButtonIconSize = (buttonSize: ButtonSizeValue) => {
  const size = buttonIconSizeByButtonSize[buttonSize];
  return css`
    width: ${size}px;
    height: ${size}px;
  `;
};

export const getButtonColors = (color: ButtonColorValue, theme: ThemeMode) => {
  if (color === ButtonColor.DEFAULT) {
    return {
      textColor: defaultTextColors[theme],
      backgroundColor: defaultBackgroundColors[theme],
      disabledTextColor: disabledDefaultTextColors[theme],
      disabledBackgroundColor: disabledDefaultBackgroundColors[theme],
    };
  }
  const excludeDefaultColor = color as ExcludeDefaultColor;
  return {
    textColor: textColors[excludeDefaultColor],
    backgroundColor: backgroundColors[excludeDefaultColor],
    disabledTextColor: disabledTextColors[excludeDefaultColor],
    disabledBackgroundColor: disabledBackgroundColors[excludeDefaultColor],
  };
};

export const getTextButtonColors = (color: ButtonColorValue, theme: ThemeMode) => {
  if (color === ButtonColor.DEFAULT) {
    return {
      textColor: defaultTextButtonColors[theme],
      disabledTextColor: disabledDefaultTextColors[theme],
    };
  }
  const excludeDefaultColor = color as ExcludeDefaultTextButtonColor;
  return {
    textColor: textButtonColors[excludeDefaultColor],
    disabledTextColor: disabledTextButtonColors[excludeDefaultColor],
  };
};
