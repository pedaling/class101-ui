import { Button } from '@class101/ui';
import React, { ReactNode } from 'react';

interface Props {
  /** 가로를 모두 채울지 여부 */
  fill?: boolean;

  /** 크기 */
  size?: 'lg' | 'md' | 'sm';

  /** 글의 색상 */
  color?: string;

  /** 배경의 색상 */
  backgroundColor?: string;

  /** 왼쪽 아이콘 이미지 */
  leftIconSrc?: string;

  /** 오른쪽 아이콘 이미지 */
  rightIconSrc?: string;

  /** 왼쪽 아이콘 노드 */
  leftIcon?: ReactNode;

  /** 오른쪽 아이콘 노드 */
  rightIcon?: ReactNode;

  /** 버튼의 둥근 정도 */
  borderRadius?: number;

  /** 진행 여부 */
  loading?: boolean;

  /** Link(React Router Dom)에 쓸 URL */
  to?: string;

  /** A Tag에 쓸 URL */
  href?: string;

  children: ReactNode;
}

export const Component = ({ children, fill, ...restProps }: Props) => (
  <Button style={{ marginRight: fill ? 0 : 12, marginBottom: fill ? 12 : 0 }} fill={fill} {...restProps}>
    {children}
  </Button>
);
