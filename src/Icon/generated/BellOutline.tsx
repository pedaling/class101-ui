import React from 'react';
import type { IconProps } from '../types';
export const BellOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2a8 8 0 00-8 8v5.764l-1 2V20h18v-2.236l-1-2V10a8 8 0 00-8-8zm-6 8a6 6 0 1112 0v6.236L18.882 18H5.118L6 16.236V10z" /><path d="M12 23a2 2 0 01-2-2h4a2 2 0 01-2 2z" /></svg>);