import { Colors, FormGroup } from '@class101/ui';
import React from 'react';

interface Props {
  /** 그룹명 */
  label: string;

  /** 그룹명의 색상 */
  labelColor?: string;

  /** 가로로 정렬 */
  inline?: boolean;

  children: Node;
}

export const Component = ({ labelColor = Colors.gray800, inline = false, ...restProps }: Props) => (
  <FormGroup labelColor={labelColor} inline={inline} {...restProps} />
);
