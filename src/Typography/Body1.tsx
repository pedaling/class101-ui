import React from 'react';

import Typography, { Typo } from '.';
import { BaseProps } from '../interfaces/props';

interface Props extends BaseProps {
  lg?: Typo;
  sm?: Typo;
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
  <Typography md="Body1" {...restProps}>
    {children}
  </Typography>
);
