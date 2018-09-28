// @flow
import React from 'react';
import { Headline1, Colors } from 'class101-ui';

type Props = {
  lg?: string,
  sm?: string,
  display?: 1 | 2,
  color?: string,
  fontWeight?: number | string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  children: Node,
};

const Component = ({
  color = Colors.gray800,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  ...restProps
}: Props) => (
  <Headline1
    color={ color }
    marginTop={ marginTop || 0 }
    marginBottom={ marginBottom || 10 }
    marginLeft={ marginLeft || 0 }
    marginRight={ marginRight || 0 }
    { ...restProps }
  />
);

export default Component;
