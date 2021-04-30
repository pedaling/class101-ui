import React from 'react';
import { IconProps } from '../index';
export const Hot = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M14 1c-2 .86-2.5 2-2.5 3S12 8 10 8C9 8 8.333 7 8 5c-3 2.25-4.5 6.12-4.5 9.5 0 4.42 3.5 7.494 8.5 7.5s8.5-3 8.5-7.5c0-2.5-.5-4.429-2.5-7S14 4 14 1zM8 15.5c0-1.5 1-3 3-3.5s2.5-1 3-2c1.08.867 2 3 2 5 0 2.786-2 4-4 4-1.78 0-4-1-4-3.5z" fill={fillColor} /></svg>);