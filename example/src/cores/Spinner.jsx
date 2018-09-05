// @flow
import React from 'react';
import { Spinner } from 'class101-ui';

type Props = {
  size?: number,
  backgroundColor?: string,
  color?: string,
};

const Component = ({ size = 50, ...props }: Props) => (
  <Spinner size={ size } { ...props } />
);

export default Component;
