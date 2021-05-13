import React from 'react';
import type { IconProps } from '../types';
export const VolumeMute = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path d="M20.5 20L19 21.5l-6-6V20a1 1 0 01-1.555.832L5.697 17H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l-3-3L3 2.5 20.5 20zm2.5-8c0 2.219-.538 4.295-1.468 6.032l-1.49-1.49C20.649 15.213 21 13.663 21 12c0-3.012-1.151-5.654-2.897-7.283l1.576-1.261C21.714 5.481 23 8.568 23 12zm-4.506 2.994A8.998 8.998 0 0019 12c0-2.411-.935-4.588-2.425-6.06l-1.578 1.262C16.207 8.292 17 10.026 17 12a7.16 7.16 0 01-.131 1.369l1.625 1.625zM13 9.5V4a1 1 0 00-1.555-.832L8.579 5.079 13 9.5z" /></svg>);