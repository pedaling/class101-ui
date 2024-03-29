import React from 'react';
import type { IconProps } from '../types';

export const Divider = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path d="M3 7a1 1 0 001 1h16a1 1 0 001-1V2h-2v4H5V2H3v5zm0 10a1 1 0 011-1h16a1 1 0 011 1v5h-2v-4H5v4H3v-5zm19-6H2v2h20v-2z" /></svg>);
