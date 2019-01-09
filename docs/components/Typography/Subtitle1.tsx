// @flow
import React from 'react';
import { Subtitle1, Colors } from '@class101/ui';

interface Typography {
  /** PC에서 해당 태그와 스타일로 변합니다. */
  lg?:
    | 'Headline1'
    | 'Headline2'
    | 'Headline1'
    | 'Subtitle1'
    | 'Body1'
    | 'Body1Paragraph'
    | 'Body2'
    | 'Body2Paragraph'
    | 'Caption1'
    | 'Caption2'
    | 'Tiny1';

  /** Mobile에서 해당 태그와 스타일로 변합니다. */
  sm?:
    | 'Headline1'
    | 'Headline2'
    | 'Headline1'
    | 'Subtitle1'
    | 'Body1'
    | 'Body1Paragraph'
    | 'Body2'
    | 'Body2Paragraph'
    | 'Caption1'
    | 'Caption2'
    | 'Tiny1';

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

  children: Node;
}

type Props = Typography;

const Component = ({
  color = Colors.gray800,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  ...restProps
}: Props) => (
  <Subtitle1
    color={color}
    marginTop={marginTop || 0}
    marginBottom={marginBottom || 10}
    marginLeft={marginLeft || 0}
    marginRight={marginRight || 0}
    {...restProps}
  />
);

export default Component;
