import React from 'react';
import Typography, { TypoProps } from '.';

export default ({ children, ...restProps }: TypoProps) => (
  <Typography md="Body2" {...restProps}>
    {children}
  </Typography>
);
