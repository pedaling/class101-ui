import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { orange600, white } from '../Colors';
import Spinner from '../Spinner';
import { body2 } from '../TextStyles';

interface Props {
  type?: string;
  block?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?: string;
  backgroundColor?: string;
  leftIconSrc?: string;
  rightIconSrc?: string;
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

interface StyledSpinnerProps {
  buttonSize: 'lg' | 'md' | 'sm' | 'xs';
}

const StyledSpinner = styled(Spinner)<StyledSpinnerProps>`
  ${props =>
    props.buttonSize === 'lg' &&
    css`
      span,
      span > svg {
        width: 24px;
        height: 24px;
      }
    `};

  ${props =>
    props.buttonSize === 'md' &&
    css`
      span,
      span > svg {
        width: 18px;
        height: 18px;
      }
    `};

  ${props =>
    props.buttonSize === 'sm' &&
    css`
      span,
      span > svg {
        width: 18px;
        height: 18px;
      }
    `};

  ${props =>
    props.buttonSize === 'xs' &&
    css`
      span,
      span > svg {
        width: 16px;
        height: 16px;
      }
    `};
`;

const LeftIcon = styled.img.attrs({ alt: '' })``;

const RightIcon = styled.img.attrs({ alt: '' })``;

const buttonStyle = css<Props>`
  ${body2};
  color: ${props => props.color || white};
  background-color: ${props => props.backgroundColor || orange600};
  outline: none;
  border: none;
  border-radius: ${props => props.borderRadius || 3}px;
  width: ${props => (props.block ? '100%' : 'auto')};
  display: ${props => (props.block ? 'block' : 'inline-block')};
  text-align: ${props => props.textAlign || 'center'};
  cursor: pointer;
  line-height: 1 !important;
  box-sizing: border-box;
  font-weight: normal;
  vertical-align: middle;

  ${props =>
    props.size === 'lg' &&
    css`
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
    css`
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
    css`
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
    css`
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

const Button = styled.button`
  ${buttonStyle};
`;

const AnchorButtonInner = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const anchorButtonStyle = css`
  ${buttonStyle};
  text-decoration: none;
  &:hover {
    color: ${props => props.color || white};
  }
`;

const LinkButton = styled(Link)`
  ${anchorButtonStyle};
`;

const AnchorButton = styled.a`
  ${anchorButtonStyle};
`;

export default ({
  size = 'md',
  type = 'button',
  leftIconSrc,
  rightIconSrc,
  children,
  disabled,
  loading,
  to,
  href,
  target,
  ...restProps
}: Props) => {
  if (loading) {
    return (
      <Button type={type} size={size} {...restProps} disabled>
        <StyledSpinner buttonSize={size} />
      </Button>
    );
  }

  const options: { rel?: string } = {};

  if (target === '_blank') {
    options.rel = 'noopener noreferrer';
  }

  const innerElements = (
    <>
      {Boolean(leftIconSrc) && <LeftIcon src={leftIconSrc} />}
      <span>{children}</span>
      {Boolean(rightIconSrc) && <RightIcon src={rightIconSrc} />}
    </>
  );

  const anchorButtonElements = <AnchorButtonInner>{innerElements}</AnchorButtonInner>;

  if (to) {
    return (
      <LinkButton to={to} target={target} size={size} disabled={disabled} {...options} {...restProps}>
        {anchorButtonElements}
      </LinkButton>
    );
  }
  if (href) {
    return (
      <AnchorButton href={href} target={target} size={size} disabled={disabled} {...options} {...restProps}>
        {anchorButtonElements}
      </AnchorButton>
    );
  }

  return (
    <Button type={type} size={size} disabled={disabled} {...restProps}>
      {innerElements}
    </Button>
  );
};
