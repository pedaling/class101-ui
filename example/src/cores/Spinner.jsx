// @flow
import React from 'react';
import { Spinner } from 'class101-ui';

type Props = {
  size?: number, // 크기
  backgroundColor?: string, // 원의 기본 색상
  color?: string, // 돌아가는 선의 색상
};

const Component = ({ size = 50, ...props }: Props) => (
  <Spinner size={ size } { ...props } />
);

export default Component;
