import React from 'react';
import { IconProps } from '../index';
export const LinkOutside = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M5 19h14v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6v2H5v14zm16-9h-2V6.5L13.5 12 12 10.5 17.5 5H14V3h7v7z" fill="#1b1c1d" /></svg>);