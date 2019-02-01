import React from 'react';
import Typography, { HedalineTypoProps } from '.';

export default ({ element = 'h3', children, ...restProps }: HedalineTypoProps) => (
  <Typography md="Headline3" element={element} {...restProps}>
    {children}
  </Typography>
);
