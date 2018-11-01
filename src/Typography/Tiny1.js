import React from 'react';
import Typography from '../Typography';

type Props = {
  lg?: string,
  sm?: string,
  color?: string,
  fontWeight?: number | string,
  textAlign?: 'left' | 'right' | 'center' | 'justify',
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  children: Node,
};

export default ({
  children,
  ...restProps
}: Props) => (
  <Typography md="Tiny1" { ...restProps }>
    { children }
  </Typography>
);
