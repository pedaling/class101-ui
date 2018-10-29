// @flow
import React from 'react';
import { FormGroup, Colors } from 'class101-ui';

type Props = {
  /** 그룹명 */
  label: string,

  /** 그룹명의 색상 */
  labelColor?: string,

  /** 가로로 정렬 */
  inline?: boolean,

  children: Node,
};

const Component = ({
  labelColor = Colors.gray800,
  inline = false,
  ...restProps
}: Props) => (
  <FormGroup
    labelColor={ labelColor }
    inline={ inline }
    { ...restProps }
  />
);

export default Component;
