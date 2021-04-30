import React from 'react';
import { IconProps } from '../index';
export const Clock = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10A10.01 10.01 0 0022 12 10.01 10.01 0 0011.99 2zM12 20a8 8 0 110-16 8 8 0 110 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="#1b1c1d" /></svg>);