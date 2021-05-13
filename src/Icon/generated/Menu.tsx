import React from 'react';
import type { IconProps } from '../types';
export const Menu = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 7h16V5H4v2zm0 6h16v-2H4v2zm0 6h16v-2H4v2z" fill={fillColor} /></svg>);