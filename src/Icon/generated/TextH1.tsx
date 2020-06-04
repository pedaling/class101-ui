import React from 'react';
import { IconProps } from '../index';
export const TextH1 = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path d="M2.5 3h2v8h9V3h2v18h-2v-8h-9v8h-2V3z" fill={fillColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.948 11.648a.75.75 0 01.302.602v7.25H23V21h-5v-1.5h1.75v-6.242l-1.535.46-.43-1.436 2.5-.75a.75.75 0 01.663.116z"
        fill={fillColor}
      />
    </svg>
  )
);
