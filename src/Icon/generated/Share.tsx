import React from 'react';
import { IconProps } from '../index';
export const Share = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 19v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7h16zM13 5.829l3.586 3.587L18 8 12 2 6 8.001l1.414 1.415L11 5.829V16h2V5.83z"
        fill={fillColor}
      />
    </svg>
  )
);
