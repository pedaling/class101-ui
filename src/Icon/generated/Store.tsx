import React from 'react';
import type { IconProps } from '../types';
export const Store = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M5 13.874V20h14v-6.126A4.01 4.01 0 0118 14a3.99 3.99 0 01-3-1.354 3.99 3.99 0 01-6 0A3.99 3.99 0 016 14a4.01 4.01 0 01-1-.126zm16-1.228V20a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.354a3.987 3.987 0 01-1-2.604 1 1 0 01.038-.317l2-7A1 1 0 015 2h14a1 1 0 01.962.725l2 7c.03.107.043.213.038.317a3.984 3.984 0 01-1 2.604zM19.389 8l-1.143-4H5.754L4.611 8h14.777zM6 12a2 2 0 002-2H4a2 2 0 002 2zm6 0a2 2 0 002-2h-4a2 2 0 002 2zm6 0a2 2 0 002-2h-4a2 2 0 002 2z" fill={fillColor} /></svg>);