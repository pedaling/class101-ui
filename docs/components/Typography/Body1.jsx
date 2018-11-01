// @flow
import React from 'react';
import { Body1, Colors } from 'class101-ui';
import { type Typography } from './TypographyProps';

type Props = {
  /** 문단 스타일 사용 여부입니다. */
  paragraph?: boolean,
} & Typography;

const Component = ({
  paragraph = false,
  color = Colors.gray800,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  ...restProps
}: Props) => (
  <Body1
    paragraph={ paragraph }
    color={ color }
    marginTop={ marginTop || 0 }
    marginBottom={ marginBottom || 10 }
    marginLeft={ marginLeft || 0 }
    marginRight={ marginRight || 0 }
    { ...restProps }
  />
);

export default Component;
