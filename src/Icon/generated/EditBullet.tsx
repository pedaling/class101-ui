import React from 'react';
import type { IconProps } from '../types';

export const EditBullet = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 10.5a1.5 1.5 0 100 3 1.5 1.5 0 100-3zm0-6a1.5 1.5 0 100 3 1.5 1.5 0 100-3zm0 12c-.83 0-1.5.68-1.5 1.5A1.51 1.51 0 004 19.5 1.51 1.51 0 005.5 18c0-.82-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" fill={fillColor} /></svg>);
