import classNames from 'classnames';
import { darken } from 'polished';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Omit } from '../../interfaces/props';
import Theme, { ThemeConfig } from '../../Theme';
import { LeftIcon, RightIcon } from './ButtonIcon';
import ButtonSpinner from './ButtonSpinner';
import { ButtonColor, ButtonColorValue, ButtonSize, ButtonSizeValue } from './interface';
import { getButtonColors } from './utils';

interface CommonProps {
  color: ButtonColorValue;
  theme: ThemeConfig;
  size: ButtonSizeValue;
  type?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  to?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
  target?: string;
  className?: string;
}

type OmittedAnchorAttributes = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;
type OmittedButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

interface Props extends CommonProps {
  fill?: boolean;
  anchorAttributes?: OmittedAnchorAttributes;
  buttonAttributes?: OmittedButtonAttributes;
}

export type ButtonProps = Props;

export default class ContainButton extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    theme: Theme.light,
    size: ButtonSize.MEDIUM,
    color: ButtonColor.DEFAULT,
    type: 'button',
    fill: false,
  };

  public render() {
    const {
      type,
      fill,
      size,
      theme,
      leftIcon,
      rightIcon,
      children,
      disabled,
      loading,
      to,
      href,
      target,
      anchorAttributes,
      buttonAttributes,
      color,
      className,
      ...restProps
    } = this.props;
    if (loading) {
      return (
        <ButtonContainer
          type={type}
          size={size}
          color={color}
          theme={theme}
          fill={`${fill}`}
          className={className}
          disabled
          {...buttonAttributes}
          {...restProps}
        >
          <Text>{children}</Text>
          <ButtonSpinner buttonSize={size} color={getButtonColors(color, theme.mode).textColor} />
        </ButtonContainer>
      );
    }

    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    const innerElements = (
      <>
        {Boolean(leftIcon) && (
          <LeftIcon
            buttonSize={size}
            textColor={getButtonColors(color, theme.mode).textColor}
            disabledTextColor={getButtonColors(color, theme.mode).disabledTextColor}
          >
            {leftIcon}
          </LeftIcon>
        )}
        <Text>{children}</Text>
        {Boolean(rightIcon) && (
          <RightIcon
            buttonSize={size}
            textColor={getButtonColors(color, theme.mode).textColor}
            disabledTextColor={getButtonColors(color, theme.mode).disabledTextColor}
          >
            {rightIcon}
          </RightIcon>
        )}
      </>
    );

    const anchorButtonElements = <AnchorButtonInner>{innerElements}</AnchorButtonInner>;

    if (to) {
      return (
        <LinkButton
          to={to}
          target={target}
          size={size}
          color={color}
          theme={theme}
          className={classNames(className, { disabled })}
          fill={`${fill}`}
          {...anchorAttributes}
          {...restProps}
          {...options}
        >
          {anchorButtonElements}
        </LinkButton>
      );
    }
    if (href) {
      return (
        <AnchorButton
          href={href}
          target={target}
          size={size}
          color={color}
          theme={theme}
          className={classNames(className, { disabled })}
          fill={`${fill}`}
          {...anchorAttributes}
          {...restProps}
          {...options}
        >
          {anchorButtonElements}
        </AnchorButton>
      );
    }

    return (
      <ButtonContainer
        type={type}
        size={size}
        color={color}
        theme={theme}
        className={classNames(className, { disabled })}
        disabled={disabled}
        fill={`${fill}`}
        {...buttonAttributes}
        {...restProps}
      >
        {innerElements}
      </ButtonContainer>
    );
  }
}

interface StyledContainerProps extends CommonProps {
  fill?: string;
}

const buttonTextStyleBySize: { [key in ButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.2px;
  `,
  [ButtonSize.MEDIUM]: css`
    font-size: 14px;
    letter-spacing: -0.2px;
  `,
  [ButtonSize.SMALL]: css`
    font-size: 14px;
    letter-spacing: -0.2px;
  `,
  [ButtonSize.XSMALL]: css`
    font-size: 11px;
  `,
};

const buttonStyleBySize: { [key in ButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    padding: 0 20px;
    height: 48px;
  `,
  [ButtonSize.MEDIUM]: css`
    padding: 0 16px;
    height: 40px;
  `,
  [ButtonSize.SMALL]: css`
    padding: 0 12px;
    height: 32px;
  `,
  [ButtonSize.XSMALL]: css`
    padding: 0 10px;
    height: 28px;
  `,
};

const buttonCommonStyle = css<StyledContainerProps>`
  flex: initial;
  outline: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};
  display: ${props => (props.fill === 'true' ? 'flex' : 'inline-flex')};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 3px;

  color: ${props => getButtonColors(props.color, props.theme.mode).textColor};
  background-color: ${props => getButtonColors(props.color, props.theme.mode).backgroundColor};
  ${props => buttonTextStyleBySize[props.size]};
  ${props => buttonStyleBySize[props.size]};

  * {
    vertical-align: middle;
  }

  transition: background-color 0.1s;

  &:hover,
  &:focus {
    background-color: ${props => darken(0.1, getButtonColors(props.color, props.theme.mode).backgroundColor)};
    text-decoration-line: none;
  }

  &.disabled {
    color: ${props => getButtonColors(props.color, props.theme.mode).disabledTextColor};
    background-color: ${props => getButtonColors(props.color, props.theme.mode).disabledBackgroundColor};
  }

  &:disabled,
  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.button<StyledContainerProps>`
  ${buttonCommonStyle};
`;

const Text = styled.div`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const anchorButtonStyle = css`
  ${buttonCommonStyle};
  text-decoration: none;
`;

const AnchorButtonInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled(Link)<StyledContainerProps>`
  ${anchorButtonStyle};
`;

const AnchorButton = styled.a<StyledContainerProps>`
  ${anchorButtonStyle};
`;
