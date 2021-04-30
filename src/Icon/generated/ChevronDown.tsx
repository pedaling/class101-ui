import React from 'react';
import { IconProps } from '../index';
export const ChevronDown = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M5.5 8.5l6.5 6 6.5-6L20 10l-8 7.5L4 10l1.5-1.5z" fill="#1b1c1d" /></svg>);