import { IconProps } from 'Icon';
import { darken } from 'polished';
import React, { PureComponent } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import Theme from '../../../Theme';
import ButtonBase, { ButtonCommonProps } from '../ButtonBase';
import { ButtonIcon, ButtonIconPosition, buttonIconSizeByButtonSize } from '../ButtonIcon';
import ButtonSpinner from '../ButtonSpinner';
import { ButtonColor, ButtonSize, ContainButtonColorValue, ContainButtonSizeValue } from '../interface';
import { getButtonColors } from '../utils';

export interface ButtonProps extends ButtonCommonProps<ContainButtonColorValue, ContainButtonSizeValue> {
  fill: boolean;
}

export default class ContainButton extends PureComponent<ButtonProps> {
  public static defaultProps: Partial<ButtonProps> = {
    theme: Theme.light,
    size: ButtonSize.MEDIUM,
    color: ButtonColor.DEFAULT,
    fill: false,
  };

  public render() {
    const { color, size, theme, leftIcon, rightIcon, fill, disabled, children, ...restProps } = this.props;
    const icon = leftIcon || rightIcon;
    const iconPosition = rightIcon ? ButtonIconPosition.RIGHT : ButtonIconPosition.LEFT;
    return (
      <StyledButtonBase
        color={color}
        size={size}
        theme={theme}
        fill={`${fill}`}
        disabled={disabled}
        icon={
          icon ? (
            <ButtonIcon position={iconPosition} buttonSize={size}>
              {React.cloneElement(icon as React.ReactElement<IconProps>, {
                fillColor: disabled
                  ? getButtonColors(color, theme.mode).disabledTextColor
                  : getButtonColors(color, theme.mode).textColor,
                size: buttonIconSizeByButtonSize[size],
              })}
            </ButtonIcon>
          ) : (
            undefined
          )
        }
        iconPosition={iconPosition}
        spinner={<ButtonSpinner buttonSize={size} color={getButtonColors(color, theme.mode).textColor} isLeftMargin />}
        {...restProps}
      >
        {children}
      </StyledButtonBase>
    );
  }
}

interface StyledContainerProps extends ButtonCommonProps<ContainButtonColorValue, ContainButtonSizeValue> {
  fill?: string;
}

const buttonStyleBySize: { [key in ButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.2px;
    padding: 0 20px;
    height: 48px;
  `,
  [ButtonSize.MEDIUM]: css`
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.2px;
    padding: 0 16px;
    height: 40px;
  `,
  [ButtonSize.SMALL]: css`
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.2px;
    padding: 0 12px;
    height: 32px;
  `,
  [ButtonSize.XSMALL]: css`
    font-weight: 500;
    font-size: 11px;
    padding: 0 10px;
    height: 28px;
  `,
};

const StyledButtonBase = styled(ButtonBase)<StyledContainerProps>`
  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};
  display: ${props => (props.fill === 'true' ? 'flex' : 'inline-flex')};
  vertical-align: middle;
  border-radius: 3px;

  color: ${props => getButtonColors(props.color, props.theme.mode).textColor};
  background-color: ${props => getButtonColors(props.color, props.theme.mode).backgroundColor};

  ${props => buttonStyleBySize[props.size as ButtonSize]};

  transition: background-color 0.1s;
  // TODO(chiabi): focus 스타일 추가하기
  &:hover,
  &:active {
    background-color: ${props => darken(0.1, getButtonColors(props.color, props.theme.mode).backgroundColor)};
    text-decoration-line: none;
  }

  &.disabled {
    color: ${props => getButtonColors(props.color, props.theme.mode).disabledTextColor};
    background-color: ${props => getButtonColors(props.color, props.theme.mode).disabledBackgroundColor};
  }
`;
