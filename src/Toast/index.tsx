import React from 'react';

import { ElevationValue } from '../ElevationStyles';

interface Props {
  elevation: ElevationValue;
  icon?: React.ReactNode;
  timeout?: number;
  hPosition?: 'left' | 'middle' | 'right';
  vPosition?: 'top' | 'center' | 'bottom';
}

export default ({ elevation, icon, timeout, hPosition, vPosition }: Props) => {
  return <div>Toast</div>;
};
