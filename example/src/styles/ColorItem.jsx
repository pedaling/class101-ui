// @flow
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'class101-ui';

type Props = {
  colorName: string,
  backgroundColor: string,
  color?: string,
};

const Container = styled.div`
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color || Colors.white};
  cursor: pointer;
  content: ${props => props.content};
`;

const Component = ({
  backgroundColor,
  colorName,
  color,
  ...restProps
}: Props) => (
  <Container
    color={ color }
    backgroundColor={ backgroundColor }
    { ...restProps }
  >
    { colorName }
  </Container>
);

export default Component;
