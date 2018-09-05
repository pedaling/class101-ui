// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { orange600, gray200 } from '../Colors';

type Props = {
  percent: number,
  backgroundColor?: string,
  barColor?: string,
  height?: number,
}

const Bar = styled.div`
  border-radius: 2px;
  background-color: ${props => props.barColor || orange600};
  width: ${props => props.percent || 0}%;
`;

const Container = styled.div`
  border-radius: 2px;
  background-color: ${props => props.backgroundColor || gray200};
  flex-grow: 1;

  ${props => props.height && css`
    height: ${props.height}px;

    ${Bar} {
      height: ${props.height}px;
    }
  `};
`;

export default ({ percent = 0, height = 4, backgroundColor, barColor, ...restProps }: Props) => (
  <Container backgroundColor={ backgroundColor } height={ height } { ...restProps }>
    <Bar barColor={ barColor } percent={ Number(percent) > 100 ? 100 : percent } />
  </Container>
);
