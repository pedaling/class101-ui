import { IconProps } from 'Icon';
import { darken, rgba } from 'polished';
import React, { PureComponent } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Theme } from '../../../core/Theme';
import ButtonBase, { ButtonCommonProps } from '../ButtonBase';
import { ButtonIconPosition } from '../ButtonIcon';
import ButtonSpinner from '../ButtonSpinner';
import { ButtonColor, ButtonSize, IconButtonColorValue, IconButtonSize, IconButtonSizeValue } from '../interface';
import { getButtonColors } from '../utils';

const buttonIconSizeByIconButtonSize: { [key in IconButtonSize]: number } = {
  [IconButtonSize.SMALL]: 24,
  [IconButtonSize.XSMALL]: 18,
};

export interface IconButtonProps extends ButtonCommonProps<IconButtonColorValue, IconButtonSizeValue> {
  icon: React.ReactElement<IconProps>;
  fillColor?: string;
}

export class IconButton extends PureComponent<IconButtonProps> {
  public static defaultProps: Partial<IconButtonProps> = {
    theme: Theme.light,
    size: ButtonSize.SMALL,
    color: ButtonColor.DEFAULT,
  };

  public render() {
    const { color, fillColor, size, theme, icon, disabled, children, ...restProps } = this.props;

    let iconColor;
    if (fillColor) {
      iconColor = disabled ? rgba(fillColor, 0.4) : fillColor;
    } else {
      iconColor = disabled
        ? getButtonColors(color, theme.mode).disabledTextColor
        : getButtonColors(color, theme.mode).textColor;
    }
    return (
      <StyledButtonBase
        color={color}
        size={size}
        theme={theme}
        disabled={disabled}
        iconPosition={ButtonIconPosition.NONE}
        spinner={<ButtonSpinner buttonSize={size} color={getButtonColors(color, theme.mode).textColor} />}
        {...restProps}
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement<IconProps>, {
            fillColor: iconColor,
            size: buttonIconSizeByIconButtonSize[size],
          })}
      </StyledButtonBase>
    );
  }
}

const buttonStyleBySize: { [key in IconButtonSize]: FlattenSimpleInterpolation } = {
  [IconButtonSize.SMALL]: css`
    width: 32px;
    height: 32px;
  `,
  [IconButtonSize.XSMALL]: css`
    width: 28px;
    height: 28px;
  `,
};

const StyledButtonBase = styled(ButtonBase)<ButtonCommonProps<IconButtonColorValue, IconButtonSizeValue>>`
  display: inline-flex;
  flex: none;
  vertical-align: middle;
  padding: 0;
  border-radius: 3px;

  color: ${props => getButtonColors(props.color, props.theme.mode).textColor};
  background-color: ${props => getButtonColors(props.color, props.theme.mode).backgroundColor};

  ${props => buttonStyleBySize[props.size as IconButtonSize]};

  transition: background-color 0.1s;
  // TODO(chiabi): focus 스타일 추가하기
  &:hover,
  &:active {
    background-color: ${props =>
      props.color === ButtonColor.TRANSPARENT
        ? rgba(getButtonColors(ButtonColor.DEFAULT, props.theme.mode).backgroundColor, 0.2)
        : darken(0.1, getButtonColors(props.color, props.theme.mode).backgroundColor)};
    text-decoration-line: none;
  }

  &.disabled {
    color: ${props => getButtonColors(props.color, props.theme.mode).disabledTextColor};
    background-color: ${props => getButtonColors(props.color, props.theme.mode).disabledBackgroundColor};
  }
`;
