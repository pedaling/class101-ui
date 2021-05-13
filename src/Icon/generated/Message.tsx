import React from 'react';
import type { IconProps } from '../types';
export const Message = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M20 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h16zM6.555 7.168a1 1 0 10-1.109 1.664l6 4a1 1 0 001.109 0l6-4a1 1 0 00-1.109-1.664L12 10.798l-5.445-3.63z" fill={fillColor} /></svg>);