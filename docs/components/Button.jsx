// @flow
import React from 'react';
import { Button, Colors } from 'class101-ui';

type Props = {
  /** 가로를 모두 채울지 여부 */
  block?: boolean,

  /** 크기 */
  size?: 'lg' | 'md' | 'sm',

  /** 글의 색상 */
  color?: string,

  /** 배경의 색상 */
  backgroundColor?: string,

  /** 왼쪽 아이콘 */
  leftIconSrc?: string,

  /** 오른쪽 아이콘 */
  rightIconSrc?: string,

  /** 글의 정렬 */
  textAlign?: 'left' | 'center' | 'right',

  /** 버튼의 둥근 정도 */
  borderRadius?: number,

  /** 진행 여부 */
  loading?: boolean,

  /** Link(React Router Dom)에 쓸 URL */
  to?: string,

  /** A Tag에 쓸 URL */
  href?: string,

  children: Node,
};

const Component = ({
  block = false,
  size = 'md',
  color = Colors.white,
  backgroundColor = Colors.orange600,
  textAlign = 'center',
  borderRadius = 3,
  loading = false,
  children,
  ...restProps
}: Props) => (
  <Button
    style={{ marginRight: block ? 0 : 12, marginBottom: block ? 12 : 0 }}
    block={ block }
    size={ size }
    color={ color }
    backgroundColor={ backgroundColor }
    textAlign={ textAlign }
    borderRadius={ borderRadius }
    loading={ loading }
    { ...restProps }
  >
    { children }
  </Button>
);

export default Component;
