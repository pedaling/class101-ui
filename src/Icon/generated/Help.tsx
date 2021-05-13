import React from 'react';
import type { IconProps } from '../types';
export const Help = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} fillRule="evenodd" style={style} className={className} viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-12a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 00-4-4zm0 15a9 9 0 100-18 9 9 0 100 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z" /></svg>);