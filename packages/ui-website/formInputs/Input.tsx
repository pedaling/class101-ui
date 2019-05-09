import React from 'react';
import { Input } from '@class101/ui';

interface Props {
  /** 사이즈 */
  size: 'sm' | 'md';

  fill?: boolean;

  /** input의 type */
  type: string;

  /** input의 className */
  className?: string;

  /** 부모 DOM의 style */
  style?: React.CSSProperties;

  /** input의 style */
  inputStyle?: React.CSSProperties;

  /** 옆으로 쌓이게 할 것인지 여부 */
  inline?: boolean;

  /** 성공 메세지 */
  allowMessage?: string;

  /** 경고 메세지 */
  warnMessage?: string;

  /** 오류 메세지 */
  errorMessage?: string;
}

export const Component = ({ type = 'text', inline = false, ...restProps }: Props) => (
  <Input style={{ marginRight: inline ? 12 : 0 }} type={type} inline={inline} {...restProps} />
);

Component.defaultProps = {
  size: 'md',
  type: 'text',
  fill: true,
};
