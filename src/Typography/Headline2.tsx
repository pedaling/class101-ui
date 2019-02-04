import React from 'react';
import Typography, { HeadlineTypoProps } from '.';

export default ({ children, ...restProps }: HeadlineTypoProps) => (
  <Typography md="Headline2" {...restProps}>
    {children}
  </Typography>
);
