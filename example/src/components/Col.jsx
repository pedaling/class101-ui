// @flow
import React from 'react';
import { Col, Colors } from 'class101-ui';

type Props = {
};

const style = {
  border: `1px solid ${Colors.orange500}`,
  padding: '15px 10px',
  textAlign: 'center',
};

const Component = ({
  ...restProps
}: Props) => (
  <Col style={ style } { ...restProps } />
);

export default Component;
