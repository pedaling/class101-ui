// @flow
import { Card } from '@class101/ui';
import React, { ReactNode } from 'react';

interface Props {
  /** 카드 타이틀 */
  title: string;

  /** 카드 이미지 */
  coverImage: Node | string;

  /** 카드 srcSet */
  coverImageSrcSet?: string;

  /** 대체 텍스트 */
  coverImageAlt?: string;

  /** 카드 이미지 비율 */
  coverImageRatio?: '16*9' | '4*3' | '1*1';

  /** 타이틀 위에 들어갈 추가 노드 */
  extraTop?: Node;

  /** 타이틀 아래에 들어갈 추가 노드 */
  extraBottom?: Node;

  /** Link(React Router Dom)에 쓸 URL */
  to?: string;

  /**	Native Anchor에 쓸 URL */
  href?: string;

  children: ReactNode;
}

export const Component = ({ children, ...restProps }: Props) => <Card {...restProps}>{children}</Card>;
