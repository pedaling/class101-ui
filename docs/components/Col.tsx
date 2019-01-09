// @flow
import React from 'react';
import { Col, Colors } from '@class101/ui';

interface Props {
  /** 모바일(sm)에서 차지할 열 */
  sm?: number;
  /** 데스크탑(lg)에서 차지할 열 */
  lg?: number;
  /** 모바일(sm)에서 열을 오른쪽으로 이동(sm과 함께 쓰세요) */
  smOffset?: number;
  /** 데스크탑(lg)에서 열을 오른쪽으로 이동(lg와 함께 쓰세요) */
  lgOffset?: number;
  style?: React.CSSProperties;
}

const hiddenStyle = {
  border: `1px solid ${Colors.orange500}`,
  textAlign: 'center',
  backgroundColor: `${Colors.orange200}`,
  backgroundClip: 'content-box',
};

export const Component = ({ lg, sm, smOffset, lgOffset, style, ...restProps }: Props) => (
  <Col lg={lg} sm={sm} smOffset={smOffset} lgOffset={lgOffset} style={{ ...style, ...hiddenStyle }} {...restProps} />
);

export const NoHiddenStyleCol = ({ lg, sm, smOffset, lgOffset, style, ...restProps }: Props) => (
  <Col lg={lg} sm={sm} style={{ ...styleMedia }} {...restProps} />
);
