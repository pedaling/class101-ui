// @flow
import React from 'react';
import { Badge, Colors } from '@class101/ui';

export interface Props {
  color?: string;
  backgroundColor?: string;
  children: Node;
}

const hiddenStyle = {
  marginRight: 4,
  marginBottom: 4,
};

export const Component = ({
  backgroundColor = '#e62c60',
  color = Colors.whte,
  ...restProps
}: Props): React.FunctionComponent<Props> => (
  <Badge style={hiddenStyle} color={color} backgroundColor={backgroundColor} {...restProps} />
);
