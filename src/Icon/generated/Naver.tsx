import React from 'react';
import type { IconProps } from '../types';

export const Naver = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M3 3h18v18H3V3zm10.431 13.118H16.5V7.883h-3.024v4.257l-2.898-4.257H7.5v8.235h3.033v-4.266l2.898 4.266z" /></svg>);
