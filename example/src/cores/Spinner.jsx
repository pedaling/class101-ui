// @flow
import React from 'react';
import { Spinner } from 'class101-ui';

type Props = {
  size?: number,
  backgroundColor?: string,
  color?: string,
};

const Spinner = ({ ...props }: Props) => (
  <Spinner { ...props } />
);

export default Spinner;
