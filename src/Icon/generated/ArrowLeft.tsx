import React from 'react';
import { IconProps } from '../index';
export const ArrowLeft = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M10.5 4L12 5.5 6.83 11H21v2H6.83L12 18.5 10.5 20 3 12l7.5-8z" fill={fillColor} /></svg>);