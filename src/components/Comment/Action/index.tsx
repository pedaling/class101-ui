import React, { PureComponent, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Body2 } from '../../../core';
import { gray500 } from '../../../core/Colors';
import { IconButton, IconButtonProps } from '../../Button';
import { ButtonIconPosition } from '../../Button/ButtonIcon';

export type ButtonPropsForComment = Omit<IconButtonProps, 'leftIcon' | 'rightIcon' | 'color' | 'size' | 'theme'>;

export interface CommentActionProps extends ButtonPropsForComment {
  /** 사용할 icon. */
  icon: ReactElement<{ size: number }>;

  position: ButtonIconPosition;

  active: boolean;

  /** icon옆에 표시할 텍스트. */
  text?: ReactNode;
}

export class CommentAction extends PureComponent<CommentActionProps> {
  public static defaultProps: Partial<CommentActionProps> = {
    position: ButtonIconPosition.NONE,
    fillColor: gray500,
    active: true,
  };

  public render() {
    const { position, text, fillColor, children, onClick, active, ...restProps } = this.props;

    if (!active) {
      return <></>;
    }
    return (
      <Container position={position} onClick={onClick}>
        <FilledIconButton size="xs" color="transparent" fillColor={fillColor} hasCursor={!!onClick} {...restProps} />
        {text !== undefined && <TextWrapper color={gray500}>{text}</TextWrapper>}
        {children}
      </Container>
    );
  }
}

const Container = styled.div<Pick<CommentActionProps, 'position' | 'onClick'>>`
  display: flex;
  align-items: center;

  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `};
  ${({ position }) => {
    if (position === ButtonIconPosition.RIGHT) {
      return css`
        margin-left: 16px;
      `;
    }
    if (position === ButtonIconPosition.LEFT) {
      return css`
        margin-right: 16px;
      `;
    }
  }};
`;

const TextWrapper = styled(Body2)`
  margin-left: 4px;
  color: ${gray500};
`;

const FilledIconButton = styled(IconButton)<{ hasCursor: boolean }>`
  width: auto;
  height: auto;
  ${props =>
    !props.hasCursor &&
    css`
      cursor: default !important;
    `};
`;
