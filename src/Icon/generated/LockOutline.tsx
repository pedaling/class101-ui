import React from 'react';
import { IconProps } from '../index';
export const LockOutline = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16.732A2 2 0 0112 13a2 2 0 011 3.732V18a1 1 0 11-2 0v-1.268zM6 10V7a6 6 0 1112 0v3h1c.667 0 1 .333 1 1v10c0 .667-.333 1-1 1H5c-.667 0-1-.333-1-1V11c0-.667.333-1 1-1h1zm2 0h8V7a4 4 0 00-8 0v3zm-2 2v8h12v-8H6z"
        fill={fillColor}
      />
    </svg>
  )
);
