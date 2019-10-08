import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ThemeConfig } from '../../../core/Theme';
import { IconProps } from '../../../Icon';
import { Omit } from '../../../interfaces/props';
import { ButtonIconPosition } from '../ButtonIcon';

interface ButtonBaseProps<ColorValue, SizeValue> {
  color: ColorValue;
  theme: ThemeConfig;
  size: SizeValue;
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
  type: string;
  loading?: boolean;
  to?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  target?: string;
  className?: string;
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

interface Props<ColorValue, SizeValue> extends ButtonCommonProps<ColorValue, SizeValue> {
  spinner: React.ReactNode;
  iconPosition: ButtonIconPosition;
  icon?: React.ReactNode;
}

export default class ButtonBase<ColorValue extends string, SizeValue extends string> extends React.PureComponent<
  Props<ColorValue, SizeValue>
> {
  public static defaultProps: Partial<Props<{}, {}>> = {
    type: 'button',
  };

  public render() {
    const {
      type,
      icon,
      iconPosition,
      children,
      disabled,
      loading,
      spinner,
      to,
      href,
      target,
      anchorAttributes,
      buttonAttributes,
      className,
      ...restProps
    } = this.props;

    if (loading) {
      return (
        <ButtonContainer type={type} disabled className={className} {...buttonAttributes} {...restProps}>
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

    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    const innerElements = (
      <>
        {icon}
        <Text>{children}</Text>
      </>
    );

    if (to) {
      return (
        <AnchorButtonWrapper className={classNames(className, { disabled })}>
          <LinkButton
            to={to}
            target={target}
            icon-position={iconPosition}
            {...anchorAttributes}
            {...restProps}
            {...options}
          >
            {innerElements}
          </LinkButton>
        </AnchorButtonWrapper>
      );
    }
    if (href) {
      return (
        <AnchorButtonWrapper className={classNames(className, { disabled })}>
          <AnchorButton
            href={href}
            target={target}
            icon-position={iconPosition}
            {...anchorAttributes}
            {...restProps}
            {...options}
          >
            {innerElements}
          </AnchorButton>
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
      >
        {innerElements}
      </ButtonContainer>
    );
  }
}

const buttonCommonStyle = css`
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

const ButtonContainer = styled.button<{ 'icon-position'?: ButtonIconPosition }>`
  border: 0;
  outline: none;
  box-sizing: border-box;

  ${buttonCommonStyle};

  flex-direction: ${props => (props['icon-position'] === ButtonIconPosition.RIGHT ? 'row-reverse' : 'row')};
`;

const Text = styled.span`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnchorButtonWrapper = styled.span`
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

const LinkButton = styled(Link)<{ 'icon-position'?: ButtonIconPosition }>`
  ${props => getAnchorButtonStyle(props['icon-position'])};
`;

const AnchorButton = styled.a<{ 'icon-position'?: ButtonIconPosition }>`
  ${props => getAnchorButtonStyle(props['icon-position'])};
`;
