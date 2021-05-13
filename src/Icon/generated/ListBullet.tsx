import React from 'react';
import type { IconProps } from '../types';
export const ListBullet = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 10.5a1.5 1.5 0 100 3 1.5 1.5 0 100-3zm0-6a1.5 1.5 0 100 3 1.5 1.5 0 100-3zm0 12c-.83 0-1.5.68-1.5 1.5A1.51 1.51 0 003 19.5 1.51 1.51 0 004.5 18c0-.82-.67-1.5-1.5-1.5zM6 19h16v-2H6v2zm0-6h16v-2H6v2zm0-8v2h16V5H6z" fill={fillColor} /></svg>);