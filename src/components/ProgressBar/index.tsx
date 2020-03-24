import React, { memo } from 'react';
import styled from 'styled-components';

import { gray200, orange600 } from '../../core/Colors';

export interface ProgressBarProps {
  value?: number;
  backgroundColor?: string;
  barColor?: string;
  height?: number;
}

export const ProgressBar = memo(
  ({ value = 0, height = 4, backgroundColor = gray200, barColor = orange600, ...restProps }: ProgressBarProps) => {
    const barValue = Number(value);

    let transform = barValue > 100 ? 100 : barValue;
    if (barValue < 0) {
      transform = 0;
    }

    const barStyle = {
      transform: `translateX(${-(100 - transform)}%)`,
    };

    return (
      <Container backgroundColor={backgroundColor} height={height} {...restProps}>
        <Bar barColor={barColor} style={barStyle} />
      </Container>
    );
  }
);

const Container = styled.div<{ backgroundColor: string; height: number }>`
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  border-radius: 2px;
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height}px;
`;

const Bar = styled.div<{ barColor: string }>`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: ${props => props.barColor};
  transition: transform 0.3s ease-in-out;
`;
