// @flow
import React from 'react';
import { Col, Colors } from 'class101-ui';

type Props = {
  /** 모바일(sm)에서 차지할 열 */
  sm?: number,
  /** 데스크탑(lg)에서 차지할 열 */
  lg?: number,
  /** 모바일(sm)에서 열을 오른쪽으로 이동(sm과 함께 쓰세요) */
  smOffset?: Number,
  /** 데스크탑(lg)에서 열을 오른쪽으로 이동(lg와 함께 쓰세요) */
  lgOffset?: Number,
  style?: Object,
};

const hiddenStyle = {
  border: `1px solid ${Colors.orange500}`,
  padding: '15px 10px',
  textAlign: 'center',
  backgroundColor: `${Colors.orange200}`,
  backgroundClip: 'content-box',
};

const Component = ({
  lg,
  sm,
  smOffset,
  mdOffset,
  lgOffset,
  style,
  ...restProps
}: Props) => (
  <Col 
    lg={ lg }
    sm={ sm }
    smOffset={ smOffset }
    mdOffset={ mdOffset }
    lgOffset={ lgOffset }
    style={{ ...style, ...hiddenStyle }} 
    { ...restProps } 
  />
);

export default Component;

export const NoHiddenStyleCol = ({
  lg,
  sm,
  smOffset,
  mdOffset,
  lgOffset,
  style,
  ...restProps
}: Props) => (
  <Col
    lg={ lg }
    sm={ sm }
    smOffset={ smOffset }
    mdOffset={ mdOffset }
    lgOffset={ lgOffset }
    style={{ ...styleMedia }} 
    { ...restProps } 
  />
);
