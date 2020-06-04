import React from 'react';
import { IconProps } from '../index';
export const BellOutline = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a8 8 0 00-8 8v5.764l-1 2V20h18v-2.236l-1-2V10a8 8 0 00-8-8zm-6 8a6 6 0 1112 0v6.236L18.882 18H5.118L6 16.236V10z"
        fill={fillColor}
      />
      <path d="M12 23a2 2 0 01-2-2h4a2 2 0 01-2 2z" fill={fillColor} />
    </svg>
  )
);
