import React from 'react';
import Typography, { Typo } from '.';

interface Props {
  lg?: Typo;
  sm?: Typo;
  color?: string;
  fontWeight?: number | string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  children: JSX.Element;
}

export default ({ children, ...restProps }: Props) => (
  <Typography md="Subtitle1" {...restProps}>
    {children}
  </Typography>
);
