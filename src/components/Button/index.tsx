import { defaultTo } from 'lodash-es';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Omit } from '../../interfaces/props';
import Theme, { ThemeConfig } from '../../Theme';
import { LeftIcon, RightIcon } from './ButtonIcon';
import ButtonSpinner from './ButtonSpinner';
import { ButtonSize, ButtonSizeValue, ButtonVariant, ButtonVariantValue } from './interface';
import { getButtonColors } from './utils';

interface CommonProps {
  // Deprecated - variant 중에서만 사용해주세요
  color?: string;
  // Deprecated
  backgroundColor?: string;

  theme: ThemeConfig;
  size: ButtonSizeValue;
  variant: ButtonVariantValue;

  type?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  borderRadius?: number;
  to?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
  target?: string;
  className?: string;
  style?: React.CSSProperties;
}

type OmittedAnchorAttributes = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;
type OmittedButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

interface Props extends CommonProps {
  fill?: boolean;
  anchorAttributes?: OmittedAnchorAttributes;
  buttonAttributes?: OmittedButtonAttributes;
}

export type ButtonProps = Props;

export default class Button extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    theme: Theme.light,
    size: ButtonSize.MEDIUM,
    variant: ButtonVariant.DEFAULT,
    type: 'button',
    fill: false,
  };

  public render() {
    const {
      type,
      fill,
      size,
      variant,
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
      ...restProps
    } = this.props;
    if (loading) {
      return (
        <ButtonContainer
          type={type}
          size={size}
          variant={variant}
          theme={theme}
          fill={`${fill}`}
          disabled
          {...buttonAttributes}
          {...restProps}
        >
          <ButtonSpinner buttonSize={size} variant={variant} theme={theme} />
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
          <LeftIcon buttonSize={size} variant={variant} theme={theme}>
            {leftIcon}
          </LeftIcon>
        )}
        <Text>{children}</Text>
        {Boolean(rightIcon) && (
          <RightIcon buttonSize={size} variant={variant} theme={theme}>
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
          variant={variant}
          theme={theme}
          data-ui-disabled={disabled}
          disabled={disabled}
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
          variant={variant}
          theme={theme}
          data-ui-disabled={disabled}
          disabled={disabled}
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
        variant={variant}
        theme={theme}
        data-ui-disabled={disabled}
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

const buttonStyleBySize: { [key in ButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    font-weight: bold;
    font-size: 16px;
    padding: 0 20px;
    height: 48px;
  `,
  [ButtonSize.MEDIUM]: css`
    font-size: 14px;
    padding: 0 16px;
    height: 40px;
  `,
  [ButtonSize.SMALL]: css`
    font-size: 14px;
    padding: 0 12px;
    height: 32px;
  `,
  [ButtonSize.XSMALL]: css`
    font-size: 11px;
    padding: 0 10px;
    height: 28px;
  `,
};

const buttonCommonStyle = css<StyledContainerProps>`
  flex: none;
  outline: none;
  border: none;
  line-height: 1 !important;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: normal;

  display: ${props => (props.fill === 'true' ? 'flex' : 'inline-flex')};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: ${props => defaultTo(props.borderRadius, 3)}px;
  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};

  color: ${props => getButtonColors(props.variant, props.theme.mode).textColor};
  background: ${props => getButtonColors(props.variant, props.theme.mode).backgroundColor};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${props => buttonStyleBySize[props.size]}

  * {
    vertical-align: middle;
  }

  &:hover,
  &[hover] {
    opacity: 0.9;
    text-decoration: none;
  }

  &:disabled,
  &[disabled],
  &[data-ui-disabled] {
    color: ${props => getButtonColors(props.variant, props.theme.mode).disabledTextColor};
    background: ${props => getButtonColors(props.variant, props.theme.mode).disabledBackgroundColor};
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.button<StyledContainerProps>`
  ${buttonCommonStyle};
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const anchorButtonStyle = css`
  ${buttonCommonStyle};
  text-decoration: none;
  &:hover {
    color: inherit;
  }
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
