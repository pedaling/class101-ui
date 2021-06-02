import React from 'react';
import type { IconProps } from '../types';

export const Crown = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path d="M21 6l-5.04 5.04L12 4l-3.96 7.04L3 6v14h18V6z" fill={fillColor} /></svg>);
