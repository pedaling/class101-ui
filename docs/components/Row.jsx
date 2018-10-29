// @flow
import React from 'react';
import { Row } from 'class101-ui';

type Props = {
};

const Component = ({
  ...restProps
}: Props) => (
  <Row { ...restProps } />
);

export default Component;
