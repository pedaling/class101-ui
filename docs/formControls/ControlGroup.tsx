import { ControlGroup } from '@class101/ui';
import React from 'react';

interface Props {
  /** 가로를 모두 채울지 여부 */
  fill?: boolean;

  /** 세로로 쌓을지 여부 */
  vertical?: boolean;

  children: Node;
}

export const Component = ({ ...restProps }: Props) => <ControlGroup {...restProps} />;
