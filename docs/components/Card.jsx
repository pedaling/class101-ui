// @flow
import React from 'react';
import { Card } from 'class101-ui';

type Props = {
  /** 카드 타이틀 */
  title: string,

  /** 카드 이미지 */
  image: Node | string,

  /** 카드 srcSet */
  imageSrcSet?: string,

  /** 대체 텍스트 */
  imageAlt?: string,

  /** 카드 이미지 비율 */
  imageRatio?: '16*9' | '4*3' | '1*1',

  /** 카드 크기 */
  size?: "lg" | "sm",

  /** 태그 */
  tag?: Array<string>,

  /** 타이틀 위에 들어갈 추가 노드 */
  extraTop?: Node,

  /** 타이틀 아래에 들어갈 추가 노드 */
  extraBottom?: Node,

  /** Link(React Router Dom)에 쓸 URL */
  to?: string,

  /**	A Tag에 쓸 URL */
  href?: string,
};

const Component = ({
  title,
  image,
  imageSrcSet,
  imageAlt,
  imageRatio = "16*9",
  size = "lg",
  tag,
  extraTop,
  extraBottom,
  children,
  to,
  href,
  target,
  ...restProps
}: Props) => (
  <Card 
    title={ title }
    image={ image }
    imageSrcSet={ imageSrcSet }
    imageAlt={ imageAlt }
    imageRatio={ imageRatio }
    size={ size }
    tag={ tag }
    extraTop={ extraTop }
    extraBottom={ extraBottom }
    to={ to }
    href={ href }
    target
    { ...restProps }
  >
    { children }
  </Card>
);

export default Component;
