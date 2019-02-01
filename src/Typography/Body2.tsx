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
}

export default ({ children, ...restProps }: Props) => (
  <Typography md="Body2" {...restProps}>
    {children}
  </Typography>
);
