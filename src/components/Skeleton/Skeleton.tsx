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
  ({ style, className, color, circle, width, height, count = 0, rounded = true, children }) => {
    const skeletonInlineStyle = useMemo(() => {
      const inlineStyle = style || {};
      if (width) {
        inlineStyle.width = typeof width === 'number' ? `${width}px` : width;
        inlineStyle.display = 'block';
      }
      if (height) {
        inlineStyle.height = typeof height === 'number' ? `${height}px` : height;
        inlineStyle.display = 'block';
      }
      if (rounded) {
        inlineStyle.borderRadius = '3px';
      }
      if (circle) {
        inlineStyle.borderRadius = '50%';
      }
      return inlineStyle;
    }, [width, height, rounded, style, circle]);

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
      <Container style={skeletonInlineStyle} className={className} color={color}>
        <Content aria-hidden="true">{children || content}</Content>
      </Container>
    );
  }
);

const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
`;

const Container = styled.span<{ color?: string }>`
  background-color: ${ifDarkTheme(gray800, gray100)};
  ${props => props.color && `background-color: ${props.color}`};
  animation: ${fadeOut} 1s infinite linear alternate;
`;

const Content = styled.span`
  opacity: 0;
`;
