import React from 'react';
import type { IconProps } from '../types';

export const GooglePlus = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M8 11h6.61a6.44 6.44 0 01.11 1.16c0 4-2.68 6.84-6.72 6.84-3.87 0-7-3.13-7-7s3.13-7 7-7c1.89 0 3.47.69 4.69 1.83l-1.9 1.83c-.52-.5-1.43-1.08-2.79-1.08-2.39 0-4.34 1.98-4.34 4.42S5.61 16.42 8 16.42c2.77 0 3.81-1.99 3.97-3.02H8V11zm15 0v2h-2v2h-2v-2h-2v-2h2V9h2v2h2z" /></svg>);
