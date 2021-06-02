import React from 'react';
import type { IconProps } from '../types';

export const Compass = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.649 13.351l3.602.901-.901-3.602-2.702 2.702zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 100 16zm4.596-4.132a1 1 0 01-1.213.728L9 15 7.404 8.617a1 1 0 011.213-1.213L15 9l1.596 6.383a1 1 0 010 .485z" fill={fillColor} /></svg>);
