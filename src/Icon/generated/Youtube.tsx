import React from 'react';
import { IconProps } from '../index';
export const Youtube = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill="#1b1c1d" fillRule="evenodd" d="M21.582 7.169a2.515 2.515 0 00-1.768-1.78c-1.56-.42-7.814-.42-7.814-.42s-6.254 0-7.814.421a2.515 2.515 0 00-1.768 1.78C2 8.739 2 12.014 2 12.014s0 3.275.418 4.845c.23.866.908 1.52 1.768 1.751 1.56.421 7.814.421 7.814.421s6.254 0 7.814-.421a2.475 2.475 0 001.768-1.751c.418-1.57.418-4.845.418-4.845s0-3.275-.418-4.845zM9.955 14.988V9.04l5.227 2.974-5.227 2.974z" /></svg>);