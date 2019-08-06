import classNames from 'classnames';
import { darken } from 'polished';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Omit } from '../../../interfaces/props';
import Theme, { ThemeConfig } from '../../../Theme';
import { LeftIcon, RightIcon } from '../ButtonIcon';
import ButtonSpinner from '../ButtonSpinner';
import { TextButtonColor, TextButtonColorValue, TextButtonSize, TextButtonSizeValue } from '../interface';
import { getTextButtonColors } from '../utils';

interface CommonProps {
  color: TextButtonColorValue;
  theme: ThemeConfig;
  size: TextButtonSizeValue;
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
  icon?: boolean;
}

type OmittedAnchorAttributes = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;
type OmittedButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

interface Props extends CommonProps {
  anchorAttributes?: OmittedAnchorAttributes;
  buttonAttributes?: OmittedButtonAttributes;
}

export type TextButtonProps = Props;

export default class TextButton extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    theme: Theme.light,
    size: TextButtonSize.MEDIUM,
    color: TextButtonColor.DEFAULT,
    type: 'button',
  };

  public render() {
    const {
      type,
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
          disabled
          {...buttonAttributes}
          {...restProps}
        >
          <Text>{children}</Text>
          <ButtonSpinner buttonSize={size} color={getTextButtonColors(color, theme.mode).textColor} />
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
            textColor={getTextButtonColors(color, theme.mode).textColor}
            disabledTextColor={getTextButtonColors(color, theme.mode).disabledTextColor}
          >
            {leftIcon}
          </LeftIcon>
        )}
        <Text>{children}</Text>
        {Boolean(rightIcon) && (
          <RightIcon
            buttonSize={size}
            textColor={getTextButtonColors(color, theme.mode).textColor}
            disabledTextColor={getTextButtonColors(color, theme.mode).disabledTextColor}
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
          disabled={disabled}
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
          disabled={disabled}
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
        {...buttonAttributes}
        {...restProps}
      >
        {innerElements}
      </ButtonContainer>
    );
  }
}

const buttonStyleBySize: { [key in TextButtonSize]: FlattenSimpleInterpolation } = {
  [TextButtonSize.LARGE]: css`
    font-size: 16px;
    height: 24px;
    letter-spacing: -0.2px;
  `,
  [TextButtonSize.MEDIUM]: css`
    font-size: 14px;
    height: 20px;
    letter-spacing: -0.2px;
  `,
  [TextButtonSize.SMALL]: css`
    font-size: 14px;
    height: 20px;
    letter-spacing: -0.2px;
  `,
};

const buttonCommonStyle = css<CommonProps>`
  flex: none;
  outline: none;
  border: none;
  line-height: 1 !important;
  cursor: pointer;
  box-sizing: border-box;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background: none;

  color: ${props => getTextButtonColors(props.color, props.theme.mode).textColor};
  ${props => buttonStyleBySize[props.size]};

  transition: color 0.1s;

  &:hover,
  &:focus {
    color: ${props => darken(0.1, getTextButtonColors(props.color, props.theme.mode).textColor)};
    text-decoration-line: underline;
    ${LeftIcon},
    ${RightIcon} {
      path {
        fill: ${props => darken(0.1, getTextButtonColors(props.color, props.theme.mode).textColor)};
      }
    }
  }

  &.disabled {
    color: ${props => getTextButtonColors(props.color, props.theme.mode).disabledTextColor};
  }

  &.disabled,
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.button<CommonProps>`
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

const LinkButton = styled(Link)<CommonProps>`
  ${anchorButtonStyle};
`;

const AnchorButton = styled.a<CommonProps>`
  ${anchorButtonStyle};
`;
