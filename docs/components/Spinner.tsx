// @flow
import React from 'react';
import { Spinner, Colors } from 'class101-ui';

interface Props {
  /** 크기 */
  size?: number;

  /** 원의 배경 색상 */
  backgroundColor?: string;

  /** 돌아가는 선의 색상 */
  color?: string;
}

export const Component = ({ size = 50, backgroundColor = Colors.gray600, color = Colors.gray200 }: Props) => (
  <Spinner size={size} backgroundColor={backgroundColor} color={color} />
);
