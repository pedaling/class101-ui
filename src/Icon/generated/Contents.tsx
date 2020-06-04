import React from 'react';
import { IconProps } from '../index';
export const Contents = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.889 2H19.11a.9.9 0 01.889.91v18.18a.9.9 0 01-.889.91H4.89A.9.9 0 014 21.09V2.91A.9.9 0 014.889 2zM6 4v6h12V4H6zm0 8v2h12v-2H6zm0 4v2h10v-2H6z"
        fill={fillColor}
      />
    </svg>
  )
);
