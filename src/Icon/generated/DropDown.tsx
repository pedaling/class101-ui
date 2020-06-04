import React from 'react';
import { IconProps } from '../index';
export const DropDown = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M17 10l-5 5-5-5h10z" fill={fillColor} />
    </svg>
  )
);
