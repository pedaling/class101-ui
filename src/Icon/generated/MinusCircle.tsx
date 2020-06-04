import React from 'react';
import { IconProps } from '../index';
export const MinusCircle = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 11v2h10v-2H7z" fill={fillColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
        fill={fillColor}
      />
    </svg>
  )
);
