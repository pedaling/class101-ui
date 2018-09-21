// @flow
import React from 'react';
import { ControlGroup } from 'class101-ui';

type Props = {
  /** 가로를 모두 채울지 여부 */
  block?: boolean,

  /** 세로로 쌓을지 여부 */
  vertical?: boolean,

  children: Node,
};

const Component = ({
  block = false,
  vertical = false,
  ...restProps
}: Props) => (
  <ControlGroup
    block={ block }
    vertical={ vertical }
    { ...restProps }
  />
);

export default Component;
