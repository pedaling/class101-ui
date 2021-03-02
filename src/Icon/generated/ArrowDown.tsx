import React from 'react';
import { IconProps } from '../index';
export const ArrowDown = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.59-5.58L4 12l8 8 8-8z" fill={fillColor} /></svg>);