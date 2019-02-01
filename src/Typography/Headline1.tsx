import React from 'react';
import Typography, { HedalineTypoProps } from '.';

export default ({ element = 'h1', children, ...restProps }: HedalineTypoProps) => (
  <Typography md="Headline1" element={element} {...restProps}>
    {children}
  </Typography>
);
