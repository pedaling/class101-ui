import React from 'react';
import type { IconProps } from '../types';
export const GiftOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M21 6h-3.337c.216-.455.337-.963.337-1.5A3.5 3.5 0 0014.5 1 3.49 3.49 0 0012 2.051 3.49 3.49 0 009.5 1 3.5 3.5 0 006 4.5c0 .537.121 1.045.337 1.5H3a1 1 0 00-1 1v4a1 1 0 001 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 001-1V7a1 1 0 00-1-1zM4 8v2h7V8H4zm9 0v2h7V8h-7zm-2 4H5v7h6v-7zm2 7v-7h6v7h-6zm2-13.085a1.5 1.5 0 01-.5.085H13V4.5c0-.175.03-.344.085-.5A1.5 1.5 0 1115 5.915zM11 4.5V6H9.5a1.5 1.5 0 111.415-2c.055.156.085.325.085.5z" fill={fillColor} /></svg>);