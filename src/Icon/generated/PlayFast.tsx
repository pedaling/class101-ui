import React from 'react';
import { IconProps } from '../index';
export const PlayFast = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 14.667l-6.445 4.297A1 1 0 013 18.132V5.868a1 1 0 011.555-.833L11 9.333V5.87a1 1 0 011.555-.833l9.197 6.132a1 1 0 010 1.664l-9.197 6.132A1 1 0 0111 18.132v-3.465z"
        fill={fillColor}
      />
    </svg>
  )
);
