import React from 'react';
import type { IconProps } from '../types';

export const Minus = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path d="M20 11H4v2h16v-2z" fill={fillColor} /></svg>);
