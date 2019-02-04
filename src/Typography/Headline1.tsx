import React from 'react';
import Typography, { HeadlineTypoProps } from '.';

export default ({ children, ...restProps }: HeadlineTypoProps) => (
  <Typography md="Headline1" {...restProps}>
    {children}
  </Typography>
);
