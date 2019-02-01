import React from 'react';
import Typography, { TypoProps } from '.';

export default ({ element = 'h4', children, ...restProps }: TypoProps) => (
  <Typography md="Subtitle1" element={element} {...restProps}>
    {children}
  </Typography>
);
