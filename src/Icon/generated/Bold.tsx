import React from 'react';
import type { IconProps } from '../types';

export const Bold = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M5 2v20h10a5 5 0 005-5v-1a5.001 5.001 0 00-3.255-4.687A4.98 4.98 0 0018 8V7a5 5 0 00-5-5H5zm8 9a3 3 0 003-3V7a3 3 0 00-3-3H7v7h6zm-6 2v7h8a3 3 0 003-3v-1a3 3 0 00-3-3H7z" fill={fillColor} /></svg>);
