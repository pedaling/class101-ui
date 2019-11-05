import React, { PureComponent, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Body2, Colors } from '../../../core';
import { IconButton, IconButtonProps } from '../../Button';
import { ButtonIconPosition } from '../../Button/ButtonIcon';

export type ButtonPropsForComment = Omit<IconButtonProps, 'leftIcon' | 'rightIcon' | 'color' | 'size' | 'theme'>;

export interface CommentActionProps extends ButtonPropsForComment {
  /** 사용할 icon. */
  icon: ReactElement<{ size: number }>;

  /** 보임/숨김 여부. */
  display: boolean;

  position: ButtonIconPosition;

  /** icon옆에 표시할 텍스트. */
  text?: ReactNode;
}

export class CommentAction extends PureComponent<CommentActionProps> {
  public static defaultProps: Partial<CommentActionProps> = {
    display: true,
    position: ButtonIconPosition.NONE,
    fillColor: Colors.gray500,
  };

  public render() {
    const { display, position, text, fillColor, children, ...restProps } = this.props;

    return (
      <Container display={display} position={position}>
        <FilledIconButton size="xs" color="transparent" fillColor={fillColor} {...restProps} />
        {text && <TextWrapper color={Colors.gray500}>{text}</TextWrapper>}
        {children}
      </Container>
    );
  }
}

const Container = styled.div<Pick<CommentActionProps, 'display' | 'position'>>`
  display: ${props => (props.display ? 'flex' : 'none')};
  align-items: center;
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
  }}
`;

const TextWrapper = styled(Body2)`
  margin-left: 4px;
  color: ${Colors.gray500};
`;

const FilledIconButton = styled(IconButton)`
  width: auto;
  height: auto;
`;
