import { css } from 'styled-components';

import { ThemeMode } from '../../Theme';
import { ButtonSize, ButtonSizeValue, ButtonVariant, ButtonVariantValue, ExcludeDefaultVariant } from './interface';
import {
  backgroundColors,
  defaultBackgroundColors,
  defaultTextColors,
  disabledBackgroundColors,
  disabledDefaultBackgroundColors,
  disabledDefaultTextColors,
  disabledTextColors,
  textColors,
} from './theme';

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

export const getButtonColors = (variant: ButtonVariantValue, theme: ThemeMode) => {
  if (variant === ButtonVariant.DEFAULT) {
    return {
      textColor: defaultTextColors[theme],
      backgroundColor: defaultBackgroundColors[theme],
      disabledTextColor: disabledDefaultTextColors[theme],
      disabledBackgroundColor: disabledDefaultBackgroundColors[theme],
    };
  }
  const excludeDefaultVariant = variant as ExcludeDefaultVariant;
  return {
    textColor: textColors[excludeDefaultVariant],
    backgroundColor: backgroundColors[excludeDefaultVariant],
    disabledTextColor: disabledTextColors[excludeDefaultVariant],
    disabledBackgroundColor: disabledBackgroundColors[excludeDefaultVariant],
  };
};
