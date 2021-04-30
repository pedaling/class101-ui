import React from 'react';
import { IconProps } from '../index';
export const ArrowRight = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path d="M13.5 4L12 5.5l5.17 5.5H3v2h14.17L12 18.5l1.5 1.5 7.5-8-7.5-8z" fill="#1b1c1d" /></svg>);