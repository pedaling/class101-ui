import React from 'react';
import Typography from '../Typography';

type Props = {
  lg?: string,
  sm?: string,
  paragraph?: boolean,
  color?: string,
  fontWeight?: number | string,
  textAlign?: 'left' | 'right' | 'center' | 'justify',
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  children: Node,
};

export default ({
  paragraph,
  children,
  ...restProps
}: Props) => (
  <Typography md={ `Body1${paragraph ? 'Paragraph' : ''}` } { ...restProps }>
    { children }
  </Typography>
);
