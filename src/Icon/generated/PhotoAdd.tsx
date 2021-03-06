import React from 'react';
import { IconProps } from '../index';
export const PhotoAdd = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 15h-2V4H4v15h11v2H3c-.552 0-1-.423-1-.944V2.944C2 2.423 2.448 2 3 2h17c.552 0 1 .423 1 .944V15zM9 12.5l2 2.5 3-4 3 4v2H5.5L9 12.5zM19 19v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"
        fill={fillColor}
      />
    </svg>
  )
);
