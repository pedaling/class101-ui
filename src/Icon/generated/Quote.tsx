import React from 'react';
import { IconProps } from '../index';
export const Quote = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M.899 14.526l.001.211C.9 17.75 3.239 20 6 20a5 5 0 100-10c-.244 0-.527.027-.717.1C5.706 8.243 6.518 6.317 8 4H5.5a28.401 28.401 0 00-2.932 4.281C1.613 9.97.9 12 .9 14.314l-.001.212zm12 0l.001.211C12.9 17.75 15.239 20 18 20a5 5 0 100-10c-.244 0-.527.027-.717.1C17.706 8.243 18.518 6.317 20 4h-2.5a28.401 28.401 0 00-2.932 4.281C13.613 9.97 12.9 12 12.9 14.314l-.001.212z" fill="#1b1c1d" /></svg>);