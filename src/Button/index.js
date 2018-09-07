import React from 'react';
import styled, { css } from 'styled-components';
import { orange600, gray800 } from '../Colors';
import { body2BlackBold } from '../TextStyles';

type Props = {
  block?: boolean,
  size?: 'lg' | 'md' | 'sm',
  color?: string,
  backgroundColor?: string,
  leftIconSrc?: string,
  rightIconSrc?: string,
  textAlign?: 'left' | 'center' | 'right',
};

const LeftIcon = styled.img.attrs({ alt: '' })``;

const RightIcon = styled.img.attrs({ alt: '' })``;

const Button = styled.button`
  ${body2BlackBold};
  color: ${props => props.color || gray800};
  background-color: ${props => props.backgroundColor || orange600};
  outline: none;
  border: none;
  width: ${props => (props.block ? '100%' : 'auto')};
  text-align: ${props => props.textAlign || 'center'};

  ${props => props.size === 'lg' && css`
    font-size: 16px;
    line-height: 28px;
    padding: 0 20px;
    height: 48px;

    ${LeftIcon}, ${RightIcon} {
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

  ${props => props.size === 'md' && css`
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

  ${props => props.size === 'sm' && css`
    font-size: 11px;
    line-height: 16px;
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
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export default ({
  size = 'md',
  leftIconSrc,
  rightIconSrc,
  children,
  ...restProps
}: Props) => (
  <Button size={ size } { ...restProps }>
    {
      Boolean(leftIconSrc) &&
      <LeftIcon src={ leftIconSrc } />
    }
    <span>{ children }</span>
    {
      Boolean(rightIconSrc) &&
      <RightIcon src={ rightIconSrc } />
    }
  </Button>
);
