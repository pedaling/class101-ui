import React from 'react';
import Typography, { Typo } from '.';

interface Props {
  lg?: Typo;
  sm?: Typo;
  display?: 1 | 2;
  color?: string;
  fontWeight?: number | string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  children: React.ReactNode;
}

export default ({ children, ...restProps }: Props) => (
  <Typography md="Headline1" {...restProps}>
    {children}
  </Typography>
);
