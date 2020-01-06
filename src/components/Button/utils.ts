import { css } from 'styled-components';

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
import {
  ButtonColor,
  ButtonColorValue,
  ButtonSize,
  ExcludedThemeColor,
  TextButtonColor,
  TextButtonColorValue,
} from './interface';

export function getButtonStyleBySize(size: ButtonSize) {
  if (size === ButtonSize.LARGE) {
    return css`
      font-weight: 700;
      font-size: 16px;
      letter-spacing: -0.2px;
      padding: 0 20px;
      height: 48px;
    `;
  }
  if (size === ButtonSize.MEDIUM) {
    return css`
      font-weight: 500;
      font-size: 14px;
      letter-spacing: -0.2px;
      padding: 0 16px;
      height: 40px;
    `;
  }
  if (size === ButtonSize.SMALL) {
    return css`
      font-weight: 500;
      font-size: 14px;
      letter-spacing: -0.2px;
      padding: 0 12px;
      height: 32px;
    `;
  }
  return css`
    font-weight: 500;
    font-size: 11px;
    padding: 0 10px;
    height: 28px;
  `;
}

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
