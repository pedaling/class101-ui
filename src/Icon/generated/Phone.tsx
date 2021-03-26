import React from 'react';
import { IconProps } from '../index';
export const Phone = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M4.338 11.412a4.572 4.572 0 01-.021-6.442L5.92 3.346a1.15 1.15 0 011.608-.017l3.06 2.969c.458.443.464 1.175.014 1.628l-2.704 2.703 5.547 5.405 2.654-2.6a1.141 1.141 0 011.607.01l2.959 2.958c.446.445.446 1.165.003 1.613l-1.619 1.628a4.57 4.57 0 01-6.47.009l-8.241-8.24z" fill={fillColor} /></svg>);