import React, { PureComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { gray800, white } from '../../core/Colors';
import { caption1, caption2 } from '../../core/TextStyles';

type Size = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  style?: React.CSSProperties;
  children?: ReactNode;
  className?: string;
  color?: string;
  backgroundColor?: string;
  icon?: ReactNode;
  pill?: boolean;
  size?: Size | number;
}

export class Badge extends PureComponent<BadgeProps> {
  public static defaultProps: Partial<BadgeProps> = {
    color: white,
    backgroundColor: gray800,
    pill: false,
    size: 'md',
  };

  public render() {
    const { className, color, backgroundColor, pill, size, icon, children, style } = this.props;
    return (
      <Container
        className={className}
        color={color}
        backgroundColor={backgroundColor}
        pill={pill}
        size={size}
        style={style}
      >
        {icon && <IconArea>{icon}</IconArea>}
        <TextArea size={size} color={color}>
          {children}
        </TextArea>
      </Container>
    );
  }
}

const containerMinWidth: { [key in Size]: number } = {
  sm: 16,
  md: 20,
  lg: 24,
};

const containerStyle = (size: BadgeProps['size'] = 'md', pill: BadgeProps['pill'] = false) => {
  const minWidth = typeof size === 'number' ? size : containerMinWidth[size];
  return css`
    min-width: ${minWidth}px;
    height: ${minWidth}px;
    border-radius: ${pill ? minWidth / 2 : 3}px;
  `;
};

const Container = styled.div<Pick<BadgeProps, 'size' | 'pill' | 'backgroundColor'>>`
  ${props => containerStyle(props.size, props.pill)};
  background-color: ${props => props.backgroundColor};
  flex: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  box-sizing: border-box;
  svg {
    width: 12px;
    height: 12px;
  }
`;

const IconArea = styled.div`
  margin-right: 3px;
`;

const TextArea = styled.div<Pick<BadgeProps, 'size' | 'color'>>`
  ${props => (props.size === 'sm' ? caption2 : caption1)};
  ${props => (props.color ? `color: ${props.color};` : '')};
`;
