import React from 'react';
import Typography from '../Typography';

type Props = {
  lg?: string,
  sm?: string,
  display?: 1 | 2,
  color?: string,
  fontWeight?: number | string,
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
  <Typography md="Headline1" { ...restProps }>
    { children }
  </Typography>
);
