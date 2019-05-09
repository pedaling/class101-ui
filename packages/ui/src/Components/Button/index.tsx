import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Colors, TextStyles, Omit } from '@common';
import { Spinner } from '@components';

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

interface CommonProps {
  type?: 'submit' | 'reset' | 'button';
  size?: ButtonSize;
  color?: string;
  backgroundColor?: string;
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
const SpinnerSizeByButtonSize: { [key in ButtonSize]: number } = {
  lg: 24,
  md: 18,
  sm: 18,
  xs: 16,
};

export default class Button extends PureComponent<Props> {
  public render() {
    const {
      size = 'md',
      type = 'button',
      fill = false,
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
        <ButtonContainer type={type} size={size} fill={`${fill}`} disabled {...buttonAttributes} {...restProps}>
          <Spinner size={SpinnerSizeByButtonSize[size]} />
        </ButtonContainer>
      );
    }

    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    const innerElements = (
      <>
        {Boolean(leftIcon) && <LeftIcon>{leftIcon}</LeftIcon>}
        <Text>{children}</Text>
        {Boolean(rightIcon) && <RightIcon>{rightIcon}</RightIcon>}
      </>
    );

    const anchorButtonElements = <AnchorButtonInner>{innerElements}</AnchorButtonInner>;

    if (to) {
      return (
        <LinkButton
          to={to}
          target={target}
          size={size}
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

const LeftIcon = styled.div`
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const RightIcon = styled.div`
  > svg {
    width: 100%;
    height: 100%;
  }
`;

interface StyledContainerProps extends CommonProps {
  fill?: string;
}

const buttonStyle = css<StyledContainerProps>`
  ${TextStyles.body2};
  color: ${props => props.color || Colors.white};
  background-color: ${props => props.backgroundColor || Colors.orange600};
  outline: none;
  border: none;
  border-radius: ${props => (props.borderRadius != null ? props.borderRadius : 3)}px;
  cursor: pointer;
  line-height: 1 !important;
  box-sizing: border-box;
  font-weight: normal;
  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};
  display: ${props => (props.fill === 'true' ? 'flex' : 'inline-flex')};
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  ${props =>
    props.size === 'lg' &&
    `
      font-weight: bold;
      font-size: 16px;
      padding: 0 20px;
      height: 48px;

      ${LeftIcon}, ${RightIcon} {
        font-size: 0;
        width: 24px;
        height: 24px;
      }

      ${LeftIcon} {
        margin-right: 4px;
      }

      ${RightIcon} {
        margin-left: 4px;
      }
    `};

  ${props =>
    props.size === 'md' &&
    `
      font-size: 14px;
      padding: 0 16px;
      height: 40px;

      ${LeftIcon}, ${RightIcon} {
        width: 18px;
        height: 18px;
      }

      ${LeftIcon} {
        margin-right: 4px;
      }

      ${RightIcon} {
        margin-left: 4px;
      }
    `};

  ${props =>
    props.size === 'sm' &&
    `
      font-size: 14px;
      padding: 0 12px;
      height: 32px;

      ${LeftIcon}, ${RightIcon} {
        width: 18px;
        height: 18px;
      }

      ${LeftIcon} {
        margin-right: 4px;
      }

      ${RightIcon} {
        margin-left: 4px;
      }
    `};

  ${props =>
    props.size === 'xs' &&
    `
      font-size: 11px;
      padding: 0 10px;
      height: 28px;

      ${LeftIcon}, ${RightIcon} {
        width: 16px;
        height: 16px;
      }

      ${LeftIcon} {
        margin-right: 2px;
      }

      ${RightIcon} {
        margin-left: 2px;
      }
    `};

  * {
    vertical-align: middle;
  }

  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${Colors.gray200};
    background-color: ${Colors.gray000};
    path {
      fill: ${Colors.gray200};
    }
  }
`;

const ButtonContainer = styled.button<StyledContainerProps>`
  ${buttonStyle};
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const anchorButtonStyle = css`
  ${buttonStyle};
  text-decoration: none;
  &:hover {
    color: ${props => props.color || Colors.white};
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
