// @flow
import { Col, Colors } from '@class101/ui';
import React from 'react';

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
