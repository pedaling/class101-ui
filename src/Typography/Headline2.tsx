import React from 'react';
import Typography, { HedalineTypoProps } from '.';

export default ({ element = 'h2', children, ...restProps }: HedalineTypoProps) => (
  <Typography md="Headline2" element={element} {...restProps}>
    {children}
  </Typography>
);
