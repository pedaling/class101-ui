import React from 'react';
import type { IconProps } from '../types';
export const Check = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M10 18l-6-6 1.5-1.5L10 15l9-9 1.5 1.5L10 18z" fill={fillColor} /></svg>);