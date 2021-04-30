import React from 'react';
import { IconProps } from '../index';
export const Groove = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 8h10V6H7v2zm0 5h10v-2H7v2zm0 5h10v-2H7v2z" fill={fillColor} /></svg>);