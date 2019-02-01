import React from 'react';
import styled from 'styled-components';

import { red600, white } from '../Colors';
import { caption2 } from '../TextStyles';

interface Props {
  color?: string;
  backgroundColor?: string;
  children?: any;
}

const Container = styled.div`
  display: inline-block;
`;

const BadgeCounter = styled.label<Props>`
  ${caption2};
  font-weight: bold;
  line-height: 1;
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

export default ({ children, color, backgroundColor, ...restProps }: Props) => (
  <Container {...restProps}>
    <BadgeCounter color={color} backgroundColor={backgroundColor}>
      {children}
    </BadgeCounter>
  </Container>
);
