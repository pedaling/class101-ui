import React from 'react';
import { IconProps } from '../index';
export const Bell = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 4.161V3.5a1.5 1.5 0 013 0v.661A7.003 7.003 0 0119 11v5.5l1 .5v2H4v-2l1-.5V11a7.003 7.003 0 015.5-6.839zM10 20h4a2 2 0 11-4 0z"
        fill={fillColor}
      />
    </svg>
  )
);
