// @flow
import React from 'react';
import { Spinner, Colors } from 'class101-ui';

type Props = {
  /** 크기 */
  size?: number,

  /** 원의 기본 색상 */
  backgroundColor?: string,

  /** 돌아가는 선의 색상 */
  color?: string,
};

const Component = ({
  size = 50,
  backgroundColor = Colors.gray600,
  color = Colors.gray200,
}: Props) => (
  <Spinner size={ size } backgroundColor={ backgroundColor } color={ color } />
);

export default Component;
