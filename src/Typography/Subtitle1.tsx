import React from 'react';
import Typography, { TypoProps } from '.';

export default ({ children, ...restProps }: TypoProps) => (
  <Typography md="Subtitle1" {...restProps}>
    {children}
  </Typography>
);
