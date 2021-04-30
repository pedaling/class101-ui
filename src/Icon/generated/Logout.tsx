import React from 'react';
import { IconProps } from '../index';
export const Logout = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M5 19h5v-3h2v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h7a1 1 0 011 1v4h-2V5H5v14zm12.173-8l-3.587-3.586L15 6l6.001 6L15 18l-1.414-1.414L17.173 13H9v-2h8.173z" fill={fillColor} /></svg>);