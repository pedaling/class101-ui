// @flow
import React from 'react';
import { ProgressState, Colors } from 'class101-ui';

type Props = {
  /** 바의 길이 */
  percent: number,

  /** 백그라운드 색상 */
  backgroundColor?: string,

  /** 바의 색상 */
  barColor?: string,

  /** 세로 높이 */
  height?: number,
};

const Component = ({
  percent,
  backgroundColor = Colors.gray200,
  barColor = Colors.orange600,
  height = 4,
}: Props) => (
  <ProgressState
    percent={ percent }
    backgroundColor={ backgroundColor }
    barColor={ barColor }
    height={ height }
  />
);

export default Component;
