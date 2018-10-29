// @flow
import React from 'react';
import { Textarea } from 'class101-ui';

type Props = {
  /** input의 className */
  className?: string,

  /** 부모 DOM의 style */
  style?: Object,

  /** input의 style */
  inputStyle?: Object,

  /** 옆으로 쌓이게 할 것인지 여부 */
  inline?: boolean,

  /** 성공 메세지 */
  allowMessage?: string,

  /** 경고 메세지 */
  warnMessage?: string,

  /** 오류 메세지 */
  errorMessage?: string,
};

const Component = ({
  inline = false,
  ...restProps
}: Props) => (
  <Textarea
    style={{ marginRight: inline ? 12 : 0 }}
    inline={ inline }
    { ...restProps }
  />
);

export default Component;
