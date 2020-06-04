import React from 'react';
import { IconProps } from '../index';
export const InfoOutline = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9zm11 9c0-6.072-4.928-11-11-11S1 5.928 1 12s4.928 11 11 11 11-4.928 11-11zm-12-1v6h2v-6h-2zm0-4v2h2V7h-2z"
        fill={fillColor}
      />
    </svg>
  )
);
