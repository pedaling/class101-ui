import React from 'react';
import styled, { css } from 'styled-components';
import { orange600, gray800 } from '../Colors';
import { body2BlackBold } from '../TextStyles';
import Spinner from '../Spinner';

type Props = {
  block?: boolean,
  size?: 'lg' | 'md' | 'sm',
  color?: string,
  backgroundColor?: string,
  leftIconSrc?: string,
  rightIconSrc?: string,
  textAlign?: 'left' | 'center' | 'right',
  loading?: boolean,
  borderRadius?: number;
};

// TODO: 스타일 아키텍쳐 작업 후 className으로 변경하자.
const StyledSpinner = styled(Spinner)`
  ${props => props.buttonSize === 'lg' && css`
    span, span > svg {
      width: 24px;
      height: 24px;
    }
  `};

  ${props => props.buttonSize === 'md' && css`
    span, span > svg {
      width: 18px;
      height: 18px;
    }
  `};

  ${props => props.buttonSize === 'sm' && css`
    span, span > svg {
      width: 16px;
      height: 16px;
    }
  `};
`;

const LeftIcon = styled.img.attrs({ alt: '' })``;

const RightIcon = styled.img.attrs({ alt: '' })``;

const Button = styled.button`
  ${body2BlackBold};
  color: ${props => props.color || gray800};
  background-color: ${props => props.backgroundColor || orange600};
  outline: none;
  border: none;
  border-radius: ${props => props.borderRadius || 1}px;
  width: ${props => (props.block ? '100%' : 'auto')};
  text-align: ${props => props.textAlign || 'center'};
  cursor: pointer;

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
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export default ({
  size = 'md',
  leftIconSrc,
  rightIconSrc,
  children,
  disabled,
  loading,
  ...restProps
}: Props) => {
  if (loading) {
    return (
      <Button size={ size } { ...restProps } disabled>
        <StyledSpinner buttonSize={ size } />
      </Button>
    );
  }

  return (
    <Button size={ size } disabled={ disabled } { ...restProps }>
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
};
