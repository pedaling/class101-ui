import { IconProps } from 'Icon';
import { darken } from 'polished';
import React, { PureComponent } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Theme } from '../../../core/Theme';
import ButtonBase, { ButtonCommonProps } from '../ButtonBase';
import { ButtonIcon, ButtonIconPosition, buttonIconSizeByButtonSize } from '../ButtonIcon';
import ButtonSpinner from '../ButtonSpinner';
import { ButtonColor, ButtonSize, TextButtonColorValue, TextButtonSize, TextButtonSizeValue } from '../interface';
import { getTextButtonColors } from '../utils';

export type TextButtonProps = ButtonCommonProps<TextButtonColorValue, TextButtonSizeValue>;

export class TextButton extends PureComponent<TextButtonProps> {
  public static defaultProps: Partial<TextButtonProps> = {
    theme: Theme.light,
    size: ButtonSize.MEDIUM,
    color: ButtonColor.DEFAULT,
  };

  public render() {
    const { color, size, theme, leftIcon, rightIcon, disabled, children, ...restProps } = this.props;
    const icon = leftIcon || rightIcon;
    const iconPosition = rightIcon ? ButtonIconPosition.RIGHT : ButtonIconPosition.LEFT;
    return (
      <StyledButtonBase
        color={color}
        size={size}
        theme={theme}
        disabled={disabled}
        icon={
          icon ? (
            <ButtonIcon position={iconPosition} buttonSize={size}>
              {React.cloneElement(icon as React.ReactElement<IconProps>, {
                fillColor: disabled
                  ? getTextButtonColors(color, theme.mode).disabledTextColor
                  : getTextButtonColors(color, theme.mode).textColor,
                size: buttonIconSizeByButtonSize[size],
              })}
            </ButtonIcon>
          ) : (
            undefined
          )
        }
        iconPosition={iconPosition}
        spinner={
          <ButtonSpinner buttonSize={size} color={getTextButtonColors(color, theme.mode).textColor} isLeftMargin />
        }
        {...restProps}
      >
        {children}
      </StyledButtonBase>
    );
  }
}

const buttonStyleBySize: { [key in TextButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.2px;
  `,
  [ButtonSize.MEDIUM]: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
  `,
  [ButtonSize.SMALL]: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
  `,
  [ButtonSize.XSMALL]: css`
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: normal;
  `,
};

const buttonHoverStyle = css<TextButtonProps>`
  color: ${props => darken(0.1, getTextButtonColors(props.color, props.theme.mode).textColor)};
  text-decoration-line: underline;
`;

const StyledButtonBase = styled(ButtonBase)<TextButtonProps>`
  display: inline-flex;
  vertical-align: middle;
  background: none;

  color: ${props => getTextButtonColors(props.color, props.theme.mode).textColor};
  ${props => buttonStyleBySize[props.size as TextButtonSize]};

  transition: color 0.1s;

  & > a {
    color: ${props => getTextButtonColors(props.color, props.theme.mode).textColor};
  }
  // TODO(chiabi): focus 스타일 추가하기
  &:not(.disabled):hover,
  &:not(.disabled):active {
    ${buttonHoverStyle};
    & > a {
      ${buttonHoverStyle};
    }
  }

  &.disabled {
    color: ${props => getTextButtonColors(props.color, props.theme.mode).disabledTextColor};
  }
`;
