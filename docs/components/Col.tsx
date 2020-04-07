// @flow
import { Col, Colors, ColProps } from '@class101/ui';
import React from 'react';

const hiddenStyle = {
  border: `1px solid ${Colors.orange500}`,
  textAlign: 'center',
  backgroundColor: `${Colors.orange200}`,
  backgroundClip: 'content-box',
};

export const Component: React.FC<ColProps> = ({ lg, sm, smOffset, lgOffset, style, ...restProps }) => (
  <Col lg={lg} sm={sm} smOffset={smOffset} lgOffset={lgOffset} style={{ ...style, ...hiddenStyle }} {...restProps} />
);

export const NoHiddenStyleCol: React.FC<ColProps> = ({ lg, sm, smOffset, lgOffset, style, ...restProps }) => (
  <Col lg={lg} sm={sm} style={{ ...style }} {...restProps} />
);
