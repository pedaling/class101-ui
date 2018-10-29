// @flow
import React from 'react';
import { Col, Colors } from 'class101-ui';

type Props = {
  style?: Object,
};

const hiddenStyle = {
  border: `1px solid ${Colors.orange500}`,
  padding: '15px 10px',
  textAlign: 'center',
};

const Component = ({
  style,
  ...restProps
}: Props) => (
  <Col style={{ ...style, ...hiddenStyle }} { ...restProps } />
);

export default Component;
