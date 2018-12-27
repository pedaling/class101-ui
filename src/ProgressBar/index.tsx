// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { orange600, gray200 } from '../Colors';

interface Props {
  value?: number;
  backgroundColor?: string;
  barColor?: string;
  height?: number;
}

const Bar = styled.div<Props>`
  border-radius: 2px;
  background-color: ${props => props.barColor || orange600};
  width: ${props => props.value || 0}%;
  transition: width 0.3s ease-in-out;
`;

const Container = styled.div<Props>`
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

export default ({ value = 0, height = 4, backgroundColor, barColor, ...restProps }: Props) => (
  <Container backgroundColor={backgroundColor} height={height} {...restProps}>
    <Bar barColor={barColor} value={Number(value) > 100 ? 100 : value} />
  </Container>
);
