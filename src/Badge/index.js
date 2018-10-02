import React from 'react';
import styled from 'styled-components';
import { tiny1WhiteBold } from '../TextStyles';
import { white, red600 } from '../Colors';

type Props = {
  color?: string,
  backgroundColor?: string,
  children: Node,
};

const Container = styled.div`
  display: inline-block;
`;

const BadgeCounter = styled.label`
  ${tiny1WhiteBold};
  min-width: 20px;
  height: 20px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor || red600};
  color: ${props => props.color || white};
  padding: 0 6px;
`;

export default ({
  children,
  color,
  backgroundColor,
  ...restProps
}: Props) => (
  <Container { ...restProps }>
    <BadgeCounter
      color={ color }
      backgroundColor={ backgroundColor }
    >
      { children || 0 }
    </BadgeCounter>
  </Container>
);
