import React, { FC, memo, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

import { gray100 } from '../../core/Colors';

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
  width?: number | string;
  height?: number | string;
  /**
   * words count.
   * if bigger than 0,
   * display will be 'inline-block'
   */
  count?: number;
  /**
   * color of skeleton
   */
  color?: string;
  /**
   * line height. it work like min-height.
   */
  lineHeight?: number;
}

export const Skeleton: FC<SkeletonProps> = memo(
  ({ style, className, circle, width, height, count, color, lineHeight, rounded }) => {
    const content = useMemo(() => {
      let result = 'F';
      for (let i = 1; i < (count || 1); i += 1) {
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
        count={count}
        color={color}
        lineHeight={lineHeight}
        rounded={rounded}
      >
        <Content>{content}</Content>
      </Container>
    );
  }
);

Skeleton.defaultProps = {
  rounded: true,
  color: gray100,
  lineHeight: 20,
  count: 0,
};

type ContainerProps = Pick<
  SkeletonProps,
  'circle' | 'width' | 'height' | 'rounded' | 'count' | 'color' | 'lineHeight' | 'rounded'
>;

const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
`;

const Container = styled.div<ContainerProps>`
  ${props => props.width && `width: ${typeof props.width === 'number' ? `${props.width}px` : props.width}`};
  ${props => props.height && `height: ${typeof props.height === 'number' ? `${props.height}px` : props.height}`};
  ${props => props.count && `display: inline-block`};
  ${props => props.rounded && `border-radius: 3px`};
  ${props => props.circle && `border-radius: 50%`};
  line-height: ${props => `${props.lineHeight}px`};
  background-color: ${props => props.color};
  animation: ${fadeOut} 1s infinite linear alternate;
`;

const Content = styled.span`
  opacity: 0;
`;
