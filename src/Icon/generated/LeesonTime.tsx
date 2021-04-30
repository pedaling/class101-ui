import React from 'react';
import { IconProps } from '../index';
export const LeesonTime = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M17 4h2.005C20.107 4 21 4.89 21 6v13c0 1.105-.893 2-1.995 2H4.995A1.994 1.994 0 013 19V6c0-1.105.893-2 1.995-2H7V2h3v2h4V2h3v2zm2 15V8H5v11h14zm-6-6h4.091v4.091H13V13z" /></svg>);