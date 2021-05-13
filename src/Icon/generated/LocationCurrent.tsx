import React from 'react';
import type { IconProps } from '../types';
export const LocationCurrent = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm2.062-1H7v2H4.062A8.003 8.003 0 0011 19.938V17h2v2.938A8.003 8.003 0 0019.938 13H17v-2h2.938A8.003 8.003 0 0013 4.062V7h-2V4.062A8.003 8.003 0 004.062 11z" fill={fillColor} /></svg>);