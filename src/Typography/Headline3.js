import React from 'react';
import Typography from '../Typography';

type Props = {
  lg?: string,
  sm?: string,
  display?: 1 | 2,
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
  <Typography md="Headline3" { ...restProps }>
    { children }
  </Typography>
);
