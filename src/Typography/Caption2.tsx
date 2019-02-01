import React from 'react';
import Typography, { TypoProps } from '.';

export default ({ element = 'div', children, ...restProps }: TypoProps) => (
  <Typography md="Caption2" element={element} {...restProps}>
    {children}
  </Typography>
);
