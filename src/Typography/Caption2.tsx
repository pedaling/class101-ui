import { BaseProps } from '../interfaces/props';
import React from 'react';

import Typography, { Typo } from '.';

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
  <Typography md="Caption2" {...restProps}>
    {children}
  </Typography>
);
