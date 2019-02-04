import React from 'react';
import Typography, { TypoProps } from '.';

export default ({ children, ...restProps }: TypoProps) => (
  <Typography md="Body1" {...restProps}>
    {children}
  </Typography>
);
