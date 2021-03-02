import React from 'react';
import { IconProps } from '../index';
export const CouponOutline = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5a1 1 0 011-1h11a1 1 0 011 1 1 1 0 102 0 1 1 0 011-1h5a1 1 0 011 1v14a1 1 0 01-1 1h-5a1 1 0 01-1-1 1 1 0 10-2 0 1 1 0 01-1 1H2a1 1 0 01-1-1V5zm2 1v12h9.17a3.001 3.001 0 015.66 0H21V6h-3.17a3.001 3.001 0 01-5.66 0H3z"
        fill={fillColor}
      />
    </svg>
  )
);
