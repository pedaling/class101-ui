import React from 'react';
import { IconProps } from '../index';
export const CheckCircleOutline = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.334 16.795l7.5-7.5-1.175-1.184-6.325 6.326-2.992-2.984-1.175 1.175 4.167 4.167z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12c0-4.967-4.033-9-9-9s-9 4.033-9 9 4.033 9 9 9 9-4.033 9-9zM12 1c6.072 0 11 4.928 11 11s-4.928 11-11 11S1 18.072 1 12 5.928 1 12 1z"
        fill={fillColor}
      />
    </svg>
  )
);
