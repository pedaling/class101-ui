import React from 'react';
import styled from 'styled-components';
import { media } from '../styles';

const Grid = styled.div`
  position: relative;
  margin: 0 32px;
  ${media.sm`
    margin: 0 24px;
  `};
  ${media.lg`
    max-width: ${props => (props.maxWidthAuto ? 'auto' : '960px')};
  `};
`;

type Props = {
  children: any,
};

export default ({ children, ...restProps }: Props) => (
  <Grid { ...restProps }>
    { children }
  </Grid>
);
