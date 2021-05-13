import React from 'react';
import type { IconProps } from '../types';
export const Link = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M14 8a1 1 0 011-1h3a5 5 0 110 10h-3a1 1 0 110-2h3a3 3 0 100-6h-3a1 1 0 01-1-1zm-4 8a1 1 0 01-1 1H6A5 5 0 116 7h3a1 1 0 110 2H6a3 3 0 100 6h3a1 1 0 011 1zm-3-4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z" fill={fillColor} /></svg>);