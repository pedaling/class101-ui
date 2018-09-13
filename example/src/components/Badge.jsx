// @flow
import React from 'react';
import { Badge, Colors } from 'class101-ui';

type Props = {
  backgroundColor?: string,
  color?: string,
  count: number,
};

const hiddenStyle = {
  marginRight: 4,
  marginBottom: 4,
};

const Component = ({
  backgroundColor = '#e62c60',
  color = Colors.whte,
  count,
  ...restProps
}: Props) => (
  <Badge
    style={ hiddenStyle }
    count={ count }
    color={ color }
    backgroundColor={ backgroundColor }
    { ...restProps }
  />
);

export default Component;
