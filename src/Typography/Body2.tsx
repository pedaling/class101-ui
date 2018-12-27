import React from 'react';
import Typography, { Typo } from '.';

interface Props {
  lg?: Typo;
  sm?: Typo;
  paragraph?: boolean;
  color?: string;
  fontWeight?: number | string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  children: JSX.Element;
}

export default ({ paragraph, children, ...restProps }: Props) => (
  <Typography md={`Body2${paragraph ? 'Paragraph' : ''}` as Typo} {...restProps}>
    {children}
  </Typography>
);
