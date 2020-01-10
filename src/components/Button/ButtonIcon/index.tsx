import styled, { css } from 'styled-components';

import { ButtonSize, ButtonSizeValue } from '../interface';

export enum ButtonIconPosition {
  LEFT,
  RIGHT,
  NONE,
}

interface ButtonIconProps {
  buttonSize: ButtonSizeValue;
  position?: ButtonIconPosition;
}

export const iconMarginByButtonSize: { [key in ButtonSize]: number } = {
  [ButtonSize.LARGE]: 4,
  [ButtonSize.MEDIUM]: 4,
  [ButtonSize.SMALL]: 4,
  [ButtonSize.XSMALL]: 2,
};

export const buttonIconSizeByButtonSize: { [key in ButtonSize]: number } = {
  [ButtonSize.LARGE]: 24,
  [ButtonSize.MEDIUM]: 18,
  [ButtonSize.SMALL]: 18,
  [ButtonSize.XSMALL]: 12,
};

export const getButtonIconSize = (buttonSize: ButtonSizeValue) => {
  const size = buttonIconSizeByButtonSize[buttonSize];
  return css`
    width: ${size}px;
    height: ${size}px;
  `;
};

export const ButtonIcon = styled.div<ButtonIconProps>`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
  ${props => getButtonIconSize(props.buttonSize)};
  ${props =>
    props.position === ButtonIconPosition.RIGHT
      ? `margin-left: ${iconMarginByButtonSize[props.buttonSize]}px`
      : `margin-right: ${iconMarginByButtonSize[props.buttonSize]}px`};
`;
