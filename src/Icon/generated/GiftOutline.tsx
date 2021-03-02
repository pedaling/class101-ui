import React from 'react';
import { IconProps } from '../index';
export const GiftOutline = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 6h-3.337A3.5 3.5 0 0012 2.05 3.5 3.5 0 006.337 6H3a1 1 0 00-1 1v4a1 1 0 001 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 001-1V7a1 1 0 00-1-1zM4 8v2h7V8H4zm9 0v2h7V8h-7zm-2 4H5v7h6v-7zm2 7v-7h6v7h-6zm2-13.085a1.498 1.498 0 01-.5.085H13V4.5A1.497 1.497 0 0114.5 3a1.5 1.5 0 01.5 2.915zM11 4.5V6H9.5A1.498 1.498 0 018 4.5a1.5 1.5 0 113 0z"
        fill={fillColor}
      />
    </svg>
  )
);
