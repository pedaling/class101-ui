import React from 'react';
import { IconProps } from '../index';
export const Bold = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2v20h10a5 5 0 005-5v-1a5.002 5.002 0 00-3.255-4.687A4.981 4.981 0 0018 8V7a5 5 0 00-5-5H5zm8 9a3 3 0 003-3V7a3 3 0 00-3-3H7v7h6zm-6 2v7h8a3 3 0 003-3v-1a3 3 0 00-3-3H7z"
        fill={fillColor}
      />
    </svg>
  )
);
