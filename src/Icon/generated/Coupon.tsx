import React from 'react';
import { IconProps } from '../index';
export const Coupon = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path d="M17.5 4c-.276 0-.494.227-.562.495a2 2 0 01-3.877 0C12.994 4.227 12.776 4 12.5 4H2a1 1 0 00-1 1v14a1 1 0 001 1h10.5c.276 0 .494-.227.562-.495a2 2 0 013.877 0c.068.268.286.495.562.495H22a1 1 0 001-1V5a1 1 0 00-1-1h-4.5z" fill="#1b1c1d" /></svg>);