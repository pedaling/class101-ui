import React from 'react';
import { IconProps } from '../index';
export const Receipt = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        d="M19 2a1 1 0 011 1v18a1 1 0 01-1.555.832l-2.318-1.545-1.42 1.42A.993.993 0 0114 22a.993.993 0 01-.707-.293L12 20.414l-1.293 1.293a.999.999 0 01-1.414 0l-1.42-1.42-2.318 1.545A1 1 0 014 21V3a1 1 0 011-1h14zm-1 17.132V4H6v15.132l1.445-.964a1 1 0 011.262.125L10 19.586l1.293-1.293a.997.997 0 011.414 0L14 19.586l1.293-1.293a.998.998 0 011.262-.125l1.445.964zM9 6h6a1 1 0 110 2H9a1 1 0 010-2zm0 4h6a1 1 0 110 2H9a1 1 0 110-2zm0 4h6a1 1 0 110 2H9a1 1 0 110-2z"
        fill={fillColor}
      />
    </svg>
  )
);
