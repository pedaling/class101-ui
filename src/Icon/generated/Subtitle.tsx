import React from 'react';
import { IconProps } from '../index';
export const Subtitle = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a1 1 0 011-1h20a1 1 0 011 1v16a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm5 12h12c.43 0 1 .448 1 1s-.57 1-1 1H6c-.43 0-1-.448-1-1s.57-1 1-1zm2-4h8c.43 0 1 .448 1 1s-.57 1-1 1H8c-.43 0-1-.448-1-1s.57-1 1-1z"
        fill={fillColor}
      />
    </svg>
  )
);
