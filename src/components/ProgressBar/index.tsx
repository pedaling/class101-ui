import React from 'react';
import styled, { css } from 'styled-components';

import { gray200, orange600 } from '../../core/Colors';

export interface ProgressBarProps {
  value?: number;
  backgroundColor?: string;
  barColor?: string;
  height?: number;
}

export const ProgressBar = ({ value = 0, height = 4, backgroundColor, barColor, ...restProps }: ProgressBarProps) => (
  <Container backgroundColor={backgroundColor} height={height} {...restProps}>
    <Bar barColor={barColor} value={Number(value) > 100 ? 100 : value} />
  </Container>
);

const Bar = styled.div<ProgressBarProps>`
  border-radius: 2px;
  background-color: ${props => props.barColor || orange600};
  width: ${props => props.value || 0}%;
  transition: width 0.3s ease-in-out;
`;

const Container = styled.div<ProgressBarProps>`
  border-radius: 2px;
  background-color: ${props => props.backgroundColor || gray200};
  flex-grow: 1;

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;

      ${Bar} {
        height: ${props.height}px;
      }
    `};
`;
