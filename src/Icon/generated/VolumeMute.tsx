import React from 'react';
import { IconProps } from '../index';
export const VolumeMute = React.memo<IconProps>(
  ({ size = 24, fillColor = '#1B1C1D', accentColor = '#DDE0E2', className, style }) => (
    <svg width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24">
      <path
        d="M20.5 20L19 21.5l-6-6V20a1 1 0 01-1.555.832L5.697 17H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l-3-3L3 2.5 20.5 20zM23 12c0 2.22-.538 4.295-1.468 6.032l-1.49-1.49c.607-1.33.958-2.88.958-4.542 0-3.012-1.151-5.654-2.897-7.283l1.576-1.26C21.714 5.48 23 8.568 23 12zM18.494 14.994A8.998 8.998 0 0019 12c0-2.41-.935-4.588-2.425-6.06l-1.578 1.262C16.207 8.292 17 10.026 17 12c0 .472-.045.93-.13 1.37l1.624 1.624zM13 9.5V4a1 1 0 00-1.555-.832L8.58 5.078 13 9.5z"
        fill={fillColor}
      />
    </svg>
  )
);
