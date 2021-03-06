import React from 'react';
import { IconProps } from '../index';
export const Analysis = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        d="M16.707 10.707a1 1 0 00-1.414-1.414L12 12.586l-1.293-1.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L10 13.414l1.293 1.293a1 1 0 001.414 0l4-4z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4a1 1 0 00-1 1v13a1 1 0 100 2h20a1 1 0 100-2V5a1 1 0 00-1-1H3zm17 2v12H4V6h16z"
        fill={fillColor}
      />
    </svg>
  )
);
