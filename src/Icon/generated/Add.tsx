import React from 'react';
import { IconProps } from '../index';
export const Add = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#1b1c1d" /></svg>);