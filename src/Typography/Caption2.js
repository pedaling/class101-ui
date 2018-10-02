import React from 'react';
import Typography from '../Typography';

type Props = {
  lg?: string,
  sm?: string,
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
  <Typography md="Caption2" { ...restProps }>
    { children }
  </Typography>
);
