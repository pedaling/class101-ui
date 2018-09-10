// @flow
import React from 'react';
import { Grid } from 'class101-ui';

type Props = {
};

const Component = ({
  ...restProps
}: Props) => (
  <Grid { ...restProps } />
);

export default Component;
