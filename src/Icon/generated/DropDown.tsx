import React from 'react';
import type { IconProps } from '../types';
export const DropDown = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M17 10l-5 5-5-5h10z" fill={fillColor} /></svg>);