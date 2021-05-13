import React from 'react';
import { IconProps } from '../index';
export const PersonOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M8.443 12.832A5.99 5.99 0 016 8a6 6 0 1112 0 5.99 5.99 0 01-2.443 4.832A8 8 0 0120 20v1h-2v-1a6 6 0 10-12 0v1H4v-1a8 8 0 014.443-7.168zM16 8a4 4 0 11-8 0 4 4 0 118 0z" fill={fillColor} /></svg>);