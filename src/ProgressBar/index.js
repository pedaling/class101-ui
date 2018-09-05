// @flow
import React from 'react';
import styled from 'styled-components';
import { orange600, gray700 } from '../Colors';

type Props = {
  percent: number,
  backgroundColor?: string,
  barColor?: string,
}

const Container = styled.div`
  border-radius: 2px;
  background-color: ${props => props.backgroundColor || gray700};
  height: 4px;
  flex-grow: 1;
`;

const Bar = styled.div`
  border-radius: 2px;
  background-color: ${props => props.barColor || orange600};
  height: 4px;
  width: ${props => props.percent || 0}%;
`;

export default ({ percent = 0, backgroundColor, barColor, ...restProps }: Props) => (
  <Container backgroundColor={ backgroundColor } { ...restProps }>
    <Bar barColor={ barColor } percent={ Number(percent) > 100 ? 100 : percent } />
  </Container>
);
