import React from 'react';
import type { IconProps } from '../types';

export const Gift = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M13 6h-2v4H3a1 1 0 01-1-1V7a1 1 0 011-1h3.337A3.487 3.487 0 016 4.5 3.5 3.5 0 019.5 1 3.49 3.49 0 0112 2.051 3.49 3.49 0 0114.5 1 3.5 3.5 0 0118 4.5c0 .537-.121 1.045-.337 1.5H21a1 1 0 011 1v2a1 1 0 01-1 1h-8V6zm-2.085-2c.055.156.085.325.085.5V6H9.5A1.5 1.5 0 018 4.5a1.5 1.5 0 012.915-.5zM13 6V4.5c0-.175.03-.344.085-.5A1.5 1.5 0 0116 4.5 1.5 1.5 0 0114.5 6H13z" />
    <path d="M11 12H3v8a1 1 0 001 1h7v-9zm2 9h7a1 1 0 001-1v-8h-8v9z" />
  </svg>
));
