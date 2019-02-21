import React, { PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { orange600, white } from '../Colors';
import Spinner from '../Spinner';
import { body2 } from '../TextStyles';

interface CommonProps {
  type?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?: string;
  backgroundColor?: string;
  leftIconSrc?: string;
  rightIconSrc?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  loading?: boolean;
  borderRadius?: number;
  to?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => void;
  children?: any;
  disabled?: boolean;
  target?: string;
  style?: React.CSSProperties;
}

interface ContainerProps extends CommonProps {
  fill?: boolean;
}

interface StyledContainerProps extends CommonProps {
  fill?: string;
}

interface StyledSpinnerProps {
  buttonSize: 'lg' | 'md' | 'sm' | 'xs';
}

const StyledSpinner = styled(Spinner)<StyledSpinnerProps>`
  ${props =>
    props.buttonSize === 'lg' &&
    `
      span,
      span > svg {
        width: 24px;
        height: 24px;
      }
    `};

  ${props =>
    props.buttonSize === 'md' &&
    `
      span,
      span > svg {
        width: 18px;
        height: 18px;
      }
    `};

  ${props =>
    props.buttonSize === 'sm' &&
    `
      span,
      span > svg {
        width: 18px;
        height: 18px;
      }
    `};

  ${props =>
    props.buttonSize === 'xs' &&
    `
      span,
      span > svg {
        width: 16px;
        height: 16px;
      }
    `};
`;

const LeftIcon = styled.div`
  img {
    width: 100%;
  }
`;

const RightIcon = styled.div`
  img {
    width: 100%;
  }
`;

const buttonStyle = css<StyledContainerProps>`
  ${body2};
  color: ${props => props.color || white};
  background-color: ${props => props.backgroundColor || orange600};
  outline: none;
  border: none;
  border-radius: ${props => props.borderRadius || 3}px;
  cursor: pointer;
  line-height: 1 !important;
  box-sizing: border-box;
  font-weight: normal;
  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};
  display: ${props => (props.fill === 'true' ? 'flex' : 'inline-flex')};
  justify-content: ${props =>
    props.textAlign === 'left' ? 'flex-start' : props.textAlign === 'right' ? 'flex-end' : 'center'};
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
    opacity: 0.8;
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
    color: ${props => props.color || white};
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

export default class Button extends PureComponent<ContainerProps> {
  public render() {
    const {
      size = 'md',
      type = 'button',
      fill = false,
      leftIconSrc,
      rightIconSrc,
      leftIcon,
      rightIcon,
      children,
      disabled,
      loading,
      to,
      href,
      target,
      ...restProps
    } = this.props;
    if (loading) {
      return (
        <ButtonContainer type={type} size={size} fill={`${fill}`} {...restProps} disabled>
          <StyledSpinner buttonSize={size} />
        </ButtonContainer>
      );
    }

    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    const innerElements = (
      <>
        {Boolean(leftIconSrc) && (
          <LeftIcon>
            <img src={leftIconSrc} alt="" />
          </LeftIcon>
        )}
        {Boolean(leftIcon) && <LeftIcon>{leftIcon}</LeftIcon>}
        <Text>{children}</Text>
        {Boolean(rightIconSrc) && (
          <RightIcon>
            <img src={rightIconSrc} alt="" />
          </RightIcon>
        )}
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
          {...restProps}
          {...options}
        >
          {anchorButtonElements}
        </AnchorButton>
      );
    }

    return (
      <ButtonContainer type={type} size={size} disabled={disabled} fill={`${fill}`} {...restProps}>
        {innerElements}
      </ButtonContainer>
    );
  }
}
