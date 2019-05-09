// @flow
import React from 'react';
import { ProgressState, Colors } from '@class101/ui';

interface Props {
  /** 현재 값 */
  value?: string;

  /** { label?: 보여줄 값, value: 내부 값 } */
  items: Array<{
    label?: string;
    value: string;
  }>;

  /** 기본 글의 색상 */
  color?: string;

  /** 기본 배경 색상 */
  backgroundColor?: string;

  /** 활성된 글의 색상 */
  activeColor?: string;

  /** 활성된 배경 색상 */
  activeBackgroundColor?: string;
}

export const Component = ({
  value,
  items,
  color = Colors.gray500,
  backgroundColor = Colors.gray700,
  activeColor = Colors.white,
  activeBackgroundColor = Colors.orange600,
}: Props) => (
  <ProgressState
    value={value}
    items={items}
    color={color}
    backgroundColor={backgroundColor}
    activeColor={activeColor}
    activeBackgroundColor={activeBackgroundColor}
  />
);
