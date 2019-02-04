import { Caption1 } from '@class101/ui';
import React, { ReactNode } from 'react';

interface Typography {
  /** PC에서 해당 태그와 스타일로 변합니다. */
  lg?: 'Headline1' | 'Headline2' | 'Headline1' | 'Subtitle1' | 'Body1' | 'Body2' | 'Caption1' | 'Caption2';

  /** Mobile에서 해당 태그와 스타일로 변합니다. */
  sm?: 'Headline1' | 'Headline2' | 'Headline1' | 'Subtitle1' | 'Body1' | 'Body2' | 'Caption1' | 'Caption2';

  /** 글자의 색상 */
  color?: string;

  /** 글자의 굵기 */
  fontWeight?: number | string;

  /** 글 정렬 */
  textAlign?: 'left' | 'right' | 'center' | 'justify';

  /** CSS의 margin-top 속성의 값 */
  marginTop?: number;

  /** CSS의 margin-bottom 속성의 값 */
  marginBottom?: number;

  /** CSS의 margin-left 속성의 값 */
  marginLeft?: number;

  /** CSS의 margin-right 속성의 값 */
  marginRight?: number;

  /** 엘리먼트 이름 */
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';

  children: ReactNode;
}

type Props = Typography;

export const Component = (props: Props) => <Caption1 {...props} />;
