import React from 'react';
import { IconProps } from '../index';
export const Copy = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4v10h10V4H10zM9 2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H9z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8H3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-3h-2v2H4V10h2V8z"
        fill={fillColor}
      />
    </svg>
  )
);
