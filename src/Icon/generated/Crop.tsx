import React from 'react';
import { IconProps } from '../index';
export const Crop = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        d="M8 3a1 1 0 00-2 0v3H3a1 1 0 000 2h3v9a1 1 0 001 1h14a1 1 0 100-2h-3V7a1 1 0 00-1-1H9v2h7v8H8V3zM17 22a1 1 0 001-1v-2h-2v2a1 1 0 001 1z"
        fill={fillColor}
      />
    </svg>
  )
);
