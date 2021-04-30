import React from 'react';
import { IconProps } from '../index';
export const Download = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 19v-6h2v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7h2v6h14zm-6-7.827l3.586-3.587L18 9l-6 6.001L6 9l1.414-1.414L11 11.173V3h2v8.173z" fill="#1b1c1d" /></svg>);