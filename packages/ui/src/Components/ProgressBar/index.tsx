import { Colors } from '@common';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

interface ProgressBarProps {
  value?: number;
  backgroundColor?: string;
  barColor?: string;
  height?: number;
}

const Bar = styled.div<ProgressBarProps>`
  border-radius: 2px;
  background-color: ${props => props.barColor || Colors.orange600};
  width: ${props => props.value || 0}%;
  transition: width 0.3s ease-in-out;
`;

const Container = styled.div<ProgressBarProps>`
  border-radius: 2px;
  background-color: ${props => props.backgroundColor || Colors.gray200};
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

export class ProgressBar extends PureComponent<ProgressBarProps> {
  public static defaultProps: Partial<ProgressBarProps> = {
    value: 0,
    height: 4,
  };
  public render() {
    const { value, height, backgroundColor, barColor, ...restProps } = this.props;
    return (
      <Container backgroundColor={backgroundColor} height={height} {...restProps}>
        <Bar barColor={barColor} value={Number(value) > 100 ? 100 : value} />
      </Container>
    );
  }
}
