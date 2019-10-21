import React, { PureComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { red600, white } from '../../core/Colors';
import { caption2 } from '../../core/TextStyles';

type Size = 'sm' | 'md';
interface BadgeTextProps {
  backgroundColor?: string;
  pill?: boolean;
  size?: Size | number;
  className?: string;
}

export interface BadgeProps extends BadgeTextProps {
  color?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export class Badge extends PureComponent<BadgeProps> {
  public static defaultProps: Partial<BadgeProps> = {
    color: white,
    backgroundColor: red600,
    pill: false,
    size: 'md',
  };

  public render() {
    const { className, color, backgroundColor, pill, size, icon, children } = this.props;
    return (
      <Container className={className} backgroundColor={backgroundColor} pill={pill} size={size}>
        {icon ? <Icon>{icon}</Icon> : null}
        <Text color={color}>{children}</Text>
      </Container>
    );
  }
}

const minWidthBySize: { [key in Size]: number } = {
  sm: 16,
  md: 20,
};

const containerStyle = (size: Size | number = 'md', pill: boolean = false) => {
  const minWidth = typeof size === 'number' ? size : minWidthBySize[size];
  return css`
    min-width: ${minWidth}px;
    height: ${minWidth}px;
    border-radius: ${pill ? minWidth / 2 : 3}px;
  `;
};

const Container = styled.div<BadgeTextProps>`
  ${props => containerStyle(props.size, props.pill)};
  flex: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  background-color: ${props => props.backgroundColor};
  box-sizing: border-box;
`;

const Icon = styled.div`
  margin-right: 2px;
  > svg {
    width: 12px;
    height: 12px;
  }
`;

const Text = styled.div<{ color?: string }>`
  ${caption2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 1;
  color: ${props => props.color};
  > svg {
    width: 12px;
    height: 12px;
    margin: 0 -6px;
  }
`;
