import React from 'react';
import styled from 'styled-components';
import { tiny1WhiteBold } from '../TextStyles';
import { white } from '../Colors';

type Props = {
  count: number,
  color?: string,
  backgroundColor?: string,
};

const Container = styled.div`
  display: inline-block;
`;

const BadgeCounter = styled.label`
  ${tiny1WhiteBold};
  height: 20px;
  width: 20px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor || '#e62c60'};
  color: ${props => props.color || white};
  padding: 0 6px;
`;

export default ({
  count = 0,
  color,
  backgroundColor,
  ...restProps
}: Props) => (
  <Container { ...restProps }>
    <BadgeCounter
      color={ color }
      backgroundColor={ backgroundColor }
    >
      { count }
    </BadgeCounter>
  </Container>
);
