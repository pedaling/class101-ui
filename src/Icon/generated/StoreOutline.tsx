import React from 'react';
import { IconProps } from '../index';
export const StoreOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M5 2a1 1 0 00-.919.606L1 9.795V10a3.5 3.5 0 002 3.163V21a1 1 0 001 1h16a1 1 0 001-1v-7.837A3.5 3.5 0 0023 10v-.205l-3.081-7.189A1 1 0 0019 2H5zm14 11.465a3.49 3.49 0 01-2-1.015 3.49 3.49 0 01-5 0 3.49 3.49 0 01-5 0 3.49 3.49 0 01-2 1.015V20h14v-6.535zM8 10H6a1.5 1.5 0 01-2.989.18L5.659 4H18.34l2.649 6.18A1.5 1.5 0 0118 10h-2a1.5 1.5 0 11-3 0h-2a1.5 1.5 0 11-3 0z" fill="#1b1c1d" /></svg>);