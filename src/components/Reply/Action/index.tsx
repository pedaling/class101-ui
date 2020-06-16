import React, { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { Caption1 } from '../../../core';
import { gray500 } from '../../../core/Colors';
import { IconButton, IconButtonProps } from '../../Button';
import { ButtonIconPosition } from '../../Button/ButtonIcon';

export type ButtonPropsForReply = Omit<IconButtonProps, 'leftIcon' | 'rightIcon' | 'color' | 'size' | 'theme'>;

export interface ReplyActionProps extends ButtonPropsForReply {
  /** 사용할 icon. */
  icon: ReactElement<{ size: number }>;

  position: ButtonIconPosition;

  hidden: boolean;

  /** icon옆에 표시할 텍스트. */
  text?: ReactNode;
  textColor?: string;
}

export const ReplyAction: FC<ReplyActionProps> = React.memo(
  ({ position, text, textColor = gray500, fillColor, children, onClick, hidden, ...restProps }) => {
    if (hidden) {
      return <></>;
    }
    return (
      <Container position={position} onClick={onClick}>
        <IconButton size="xs" color="transparent" fillColor={fillColor} {...restProps} />
        {text !== undefined && <TextWrapper color={textColor}>{text}</TextWrapper>}
        {children}
      </Container>
    );
  }
);

const Container = styled.div<Pick<ReplyActionProps, 'position' | 'onClick'>>`
  display: flex;
  align-items: center;

  ${props => props.onClick && 'cursor: pointer'};
  ${({ position }) => {
    if (position === ButtonIconPosition.RIGHT) {
      return 'margin-left: 12px;';
    }
    if (position === ButtonIconPosition.LEFT) {
      return 'margin-right: 12px;';
    }
  }};
`;

const TextWrapper = styled(Caption1)`
  margin-left: 5px;
  color: ${gray500};
`;
