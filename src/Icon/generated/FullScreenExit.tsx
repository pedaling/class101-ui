import React from 'react';
import { IconProps } from '../index';
export const FullScreenExit = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M21 12v7a1 1 0 01-1 1H10v-2h9v-6h2zM3 12V5a1 1 0 011-1h10v2H5v6H3zm5 9H6v-3.5L2.5 21 1 19.5 4.5 16H1v-2h7v7zm8-18h2v3.5L21.5 3 23 4.5 19.5 8H23v2h-7V3z" fill={fillColor} /></svg>);