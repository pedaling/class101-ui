import React from 'react';
import Typography, { TypoProps } from '.';

export default ({ children, ...restProps }: TypoProps) => (
  <Typography md="Caption1" {...restProps}>
    {children}
  </Typography>
);
