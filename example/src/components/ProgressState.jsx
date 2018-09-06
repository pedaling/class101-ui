// @flow
import React from 'react';
import { ProgressState, Colors } from 'class101-ui';

type Props = {
  /** { label: string, active?: boolean } */
  values: Array<{
    label: string,
    active?: boolean,
  }>,

  /** 기본 글의 색상 */
  color?: string,

  /** 기본 배경 색상 */
  backgroundColor?: string,

  /** 활성된 글의 색상 */
  activeColor?: string,

  /** 활성된 배경 색상 */
  activeBackgroundColor?: string,
};

const Component = ({
  values,
  color = Colors.gray500,
  backgroundColor = Colors.gray700,
  activeColor = Colors.white,
  activeBackgroundColor = Colors.orange600,
}: Props) => (
  <ProgressState
    values={ values }
    color={ color }
    backgroundColor={ backgroundColor }
    activeColor={ activeColor }
    activeBackgroundColor={ activeBackgroundColor }
  />
);

export default Component;
