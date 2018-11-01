// @flow
import React from 'react';
import { Headline2, Colors } from 'class101-ui';
import { type Typography } from './TypographyProps';

type Props = {
  /** 더 큰 글자 스타일을 원한다면 쓰시면 됩니다. */
  display?: 2 | 3,
} & Typography;

const Component = ({
  color = Colors.gray800,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  ...restProps
}: Props) => (
  <Headline2
    color={ color }
    marginTop={ marginTop || 0 }
    marginBottom={ marginBottom || 10 }
    marginLeft={ marginLeft || 0 }
    marginRight={ marginRight || 0 }
    { ...restProps }
  />
);

export default Component;
