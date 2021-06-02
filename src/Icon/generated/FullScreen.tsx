import React from 'react';
import type { IconProps } from '../types';

export const FullScreen = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M1 11V4a1 1 0 011-1h11v2H3v6H1zm0 3h2v3.5L6.5 14 8 15.5 4.5 19H8v2H1v-7zm22-4h-2V6.5L17.5 10 16 8.5 19.5 5H16V3h7v7zm0 3v7a1 1 0 01-1 1H11v-2h10v-6h2z" fill={fillColor} /></svg>);
