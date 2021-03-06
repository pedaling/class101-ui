import React from 'react';
import { IconProps } from '../index';
export const Info = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-12 5v-6h2v6h-2zm0-8V7h2v2h-2z"
        fill={fillColor}
      />
    </svg>
  )
);
