// @flow
import React from 'react';
import { ProgressBar, Colors } from '@class101/ui';

interface Props {
  /** 바의 길이 */
  value: number;

  /** 배경 색상 */
  backgroundColor?: string;

  /** 바의 색상 */
  barColor?: string;

  /** 세로 높이 */
  height?: number;
}

export const Component = ({
  value,
  backgroundColor = Colors.gray200,
  barColor = Colors.orange600,
  height = 4,
}: Props) => <ProgressBar value={value} backgroundColor={backgroundColor} barColor={barColor} height={height} />;
