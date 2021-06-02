import React from 'react';
import type { IconProps } from '../types';

export const WonCircle = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M8.071 11.357L7.5 8.786h1.071l1.286 6 1.286-6h1.714l1.286 6 1.286-6H16.5l-.571 2.571h1.214v1.286h-1.5l-.857 3.857H13.5L12 10.071 10.5 16.5H9.214l-.857-3.857h-1.5v-1.286h1.214zM12 22a10 10 0 110-20 10 10 0 110 20zm0-2a8 8 0 100-16 8 8 0 100 16z" fill={fillColor} /></svg>);
