import React from 'react';
import { IconProps } from '../index';
export const Minus = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path d="M20 11H4v2h16v-2z" fill={fillColor} />
    </svg>
  )
);
