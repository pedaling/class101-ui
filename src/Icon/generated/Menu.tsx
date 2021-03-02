import React from 'react';
import { IconProps } from '../index';
export const Menu = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 7h16V5H4v2zm0 6h16v-2H4v2zm0 6h16v-2H4v2z" fill={fillColor} />
    </svg>
  )
);
