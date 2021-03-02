import React from 'react';
import { IconProps } from '../index';
export const Crown = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path d="M21 6l-5.04 5.04L12 4l-3.96 7.04L3 6v14h18V6z" fill={fillColor} />
    </svg>
  )
);
