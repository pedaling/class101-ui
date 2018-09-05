// @flow
import React from 'react';
import { ProgressBar, Colors } from 'class101-ui';

type Props = {
  /** 바의 길이 */
  percent: number,

  /** 백그라운드 색상 */
  backgroundColor?: string,

  /** 바의 색상 */
  barColor?: string,
};

const Component = ({
  percent = 0,
  backgroundColor = Colors.gray700,
  barColor = Colors.orange600,
}: Props) => (
  <ProgressBar percent={ percent } backgroundColor={ backgroundColor } barColor={ barColor } />
);

export default Component;
