import React from 'react';
import type { IconProps } from '../types';

export const Play = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M6.498 3.135a1 1 0 01.998-.003l14 8a1 1 0 010 1.736l-14 8A1 1 0 016 20V4a1 1 0 01.498-.865z" fill={fillColor} /></svg>);
