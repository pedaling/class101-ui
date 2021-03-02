import React from 'react';
import { IconProps } from '../index';
export const Divider = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M3 7a1 1 0 001 1h16a1 1 0 001-1V2h-2v4H5V2H3v5zM3 17a1 1 0 011-1h16a1 1 0 011 1v5h-2v-4H5v4H3v-5zM22 11H2v2h20v-2z" fill={fillColor} /></svg>);