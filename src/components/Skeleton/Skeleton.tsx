import React, { FC, memo, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

import { gray100, gray800 } from '../../core/Colors';
import { ifDarkTheme } from '../../utils';

export interface SkeletonProps {
  style?: React.CSSProperties;
  className?: string;
  /**
   * radius 50%
   */
  circle?: boolean;
  /**
   * radius 3px.
   */
  rounded?: boolean;
  /**
   * set `display: block` if not null.
   */
  width?: number | string;
  /**
   * set `display: block` if not null.
   */
  height?: number | string;
  /**
   * color of skeleton
   */
  color?: string;
  /**
   * placeholder words.
   */
  children?: string;
  /**
   * placeholder words count.
   */
  count?: number;
}

export const Skeleton: FC<SkeletonProps> = memo(
  ({ style, className, circle, width, height, count, color, rounded, children }) => {
    const content = useMemo(() => {
      if (!count) {
        return 'F';
      }
      let result = '';
      for (let i = 0; i < count; i += 1) {
        result += 'F';
      }
      return result;
    }, [count]);

    return (
      <Container
        style={style}
        className={className}
        circle={circle}
        width={width}
        height={height}
        color={color}
        rounded={rounded}
      >
        <Content>{children || content}</Content>
      </Container>
    );
  }
);

Skeleton.defaultProps = {
  rounded: true,
  count: 0,
};

type ContainerProps = Pick<SkeletonProps, 'circle' | 'width' | 'height' | 'rounded' | 'color' | 'rounded'>;

const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
`;

const Container = styled.span<ContainerProps>`
  ${props => props.width && `width: ${typeof props.width === 'number' ? `${props.width}px` : props.width}`};
  ${props => props.height && `height: ${typeof props.height === 'number' ? `${props.height}px` : props.height}`};
  ${props => props.rounded && `border-radius: 3px`};
  ${props => props.circle && `border-radius: 50%`};
  ${props => (props.width || props.height) && `display: block`};
  background-color: ${gray100};
  ${ifDarkTheme(`background-color: ${gray800};`)}
  ${props => props.color && `background-color: ${props.color}`};
  animation: ${fadeOut} 1s infinite linear alternate;
`;

const Content = styled.span`
  opacity: 0;
`;
