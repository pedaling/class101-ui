import React from 'react';
import { IconProps } from '../index';
export const Undo = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.829 10l3.587 3.586L9 15 3 9l6.001-6 1.415 1.414L6.829 8H15A6 6 0 0115 20h-3v-2h3a4 4 0 000-8H6.829z"
        fill={fillColor}
      />
    </svg>
  )
);
