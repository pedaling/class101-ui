import React, { PureComponent, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Body2, Colors } from '../../../core';
import { IconButton, IconButtonProps } from '../../Button';
import { ButtonIconPosition } from '../../Button/ButtonIcon';

export interface CommentActionProps
  extends Omit<IconButtonProps, 'leftIcon' | 'rightIcon' | 'color' | 'size' | 'theme'> {
  icon: ReactElement<{ size: number }>;
  visible: boolean;
  position: ButtonIconPosition;
  text?: ReactNode;
}

export class CommentAction extends PureComponent<CommentActionProps> {
  public static defaultProps: Partial<CommentActionProps> = {
    visible: true,
    position: ButtonIconPosition.NONE,
    fillColor: Colors.gray500,
  };

  public render() {
    const { visible, position, text, fillColor, children, ...restProps } = this.props;

    return (
      <Container visible={visible} position={position}>
        <FilledIconButton size="xs" color="transparent" fillColor={fillColor} {...restProps} />
        {text && <TextWrapper color={Colors.gray500}>{text}</TextWrapper>}
        {children}
      </Container>
    );
  }
}

const Container = styled.div<{ position: ButtonIconPosition; visible: boolean }>`
  display: ${props => (props.visible ? 'flex' : 'none')};
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
  align-items: center;
`;

const TextWrapper = styled(Body2)`
  margin-left: 4px;
  color: ${Colors.gray500};
`;

const FilledIconButton = styled(IconButton)`
  width: auto;
  height: auto;
`;
