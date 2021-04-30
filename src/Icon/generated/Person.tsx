import React from 'react';
import { IconProps } from '../index';
export const Person = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.557 12.832A8 8 0 0120 20v1H4v-1a8 8 0 014.443-7.168A5.99 5.99 0 016 8a6 6 0 1112 0 5.99 5.99 0 01-2.443 4.832z" fill="#1b1c1d" /></svg>);