import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { LinkBlock } from '../../../core/LinkBlock';
import { ThemeConfig } from '../../../core/Theme';
import { IconProps } from '../../../Icon';
import { Omit } from '../../../interfaces/props';
import { ButtonIconPosition } from '../ButtonIcon';

interface ButtonBaseProps<ColorValue, SizeValue> {
  color?: ColorValue;
  theme?: ThemeConfig;
  size?: SizeValue;
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  external?: boolean;
  'data-element-name'?: string;
}

type OmittedAnchorAttributes<ColorValue, SizeValue> = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof ButtonBaseProps<ColorValue, SizeValue>
>;
type OmittedButtonAttributes<ColorValue, SizeValue> = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonBaseProps<ColorValue, SizeValue>
>;

export interface ButtonCommonProps<ColorValue, SizeValue> extends ButtonBaseProps<ColorValue, SizeValue> {
  anchorAttributes?: OmittedAnchorAttributes<ColorValue, SizeValue>;
  buttonAttributes?: OmittedButtonAttributes<ColorValue, SizeValue>;
}

interface Props<ColorValue = string, SizeValue = string> extends ButtonCommonProps<ColorValue, SizeValue> {
  spinner: React.ReactNode;
  iconPosition: ButtonIconPosition;
  icon?: React.ReactNode;
}

const ButtonBase = forwardRef<HTMLButtonElement, Props>(
  (
    {
      type = 'button',
      icon,
      iconPosition,
      children,
      disabled,
      loading,
      spinner,
      to,
      external,
      anchorAttributes,
      buttonAttributes,
      className,
      ...restProps
    }: Props,
    ref,
  ) => {
    if (loading) {
      return (
        <ButtonContainer type={type} disabled className={className} {...buttonAttributes} {...restProps} ref={ref}>
          {!icon && iconPosition === ButtonIconPosition.NONE ? (
            spinner
          ) : (
            <>
              <Text>{children}</Text>
              {spinner}
            </>
          )}
        </ButtonContainer>
      );
    }

    const innerElements = (
      <>
        {icon}
        <Text>{children}</Text>
      </>
    );

    if (to) {
      return (
        <AnchorButtonWrapper className={classNames(className, { disabled })} ref={ref}>
          <LinkButton to={to} external={external} icon-position={iconPosition} {...anchorAttributes} {...restProps}>
            {innerElements}
          </LinkButton>
        </AnchorButtonWrapper>
      );
    }

    return (
      <ButtonContainer
        type={type}
        icon-position={iconPosition}
        disabled={disabled}
        className={classNames(className, { disabled })}
        {...buttonAttributes}
        {...restProps}
        ref={ref}
      >
        {innerElements}
      </ButtonContainer>
    );
  },
);

export default ButtonBase;

export const buttonCommonStyle = css`
  margin: 0;
  padding: 0;

  flex: initial;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &.disabled {
    cursor: not-allowed;
  }
`;

const buttonResetStyle = css`
  border: 0;
  outline: none;
  box-sizing: border-box;
`;

const ButtonContainer = styled.button<{ 'icon-position'?: ButtonIconPosition }>`
  ${buttonResetStyle}
  ${buttonCommonStyle};

  flex-direction: ${(props) => (props['icon-position'] === ButtonIconPosition.RIGHT ? 'row-reverse' : 'row')};
`;

const Text = styled.span`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnchorButtonWrapper = styled.button`
  ${buttonResetStyle}
  ${buttonCommonStyle};
  &.disabled {
    cursor: not-allowed;
  }
`;

const getAnchorButtonStyle = (iconPosition?: ButtonIconPosition) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex-direction: ${iconPosition === ButtonIconPosition.RIGHT ? 'row-reverse' : 'row'};
  .disabled & {
    pointer-events: none;
  }
`;

const LinkButton = styled(LinkBlock)<{ 'icon-position'?: ButtonIconPosition }>`
  ${(props) => getAnchorButtonStyle(props['icon-position'])};
`;
