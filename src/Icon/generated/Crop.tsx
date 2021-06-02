import React from 'react';
import type { IconProps } from '../types';

export const Crop = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path d="M8 3a1 1 0 10-2 0v3H3a1 1 0 100 2h3v9a1 1 0 001 1h14a1 1 0 100-2h-3V7a1 1 0 00-1-1H9v2h7v8H8V3zm9 19a1 1 0 001-1v-2h-2v2a1 1 0 001 1z" /></svg>);
