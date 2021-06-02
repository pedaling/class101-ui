import React from 'react';
import type { IconProps } from '../types';

export const Eye = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 12c2 4.001 4.667 6.002 8 6.002s6-2 8-6.001c-2-4-4.667-6-8-6s-6 2-8 6zm-1.789.894a2 2 0 010-1.789C4.524 6.48 7.83 4 12 4s7.476 2.48 9.789 7.106a2 2 0 010 1.789c-2.313 4.627-5.619 7.107-9.789 7.107s-7.476-2.48-9.789-7.107zM12 8a1 1 0 110 2 2 2 0 00-1.923 2.553A2 2 0 0014 12a1 1 0 112 0 4 4 0 11-4-4z" fill={fillColor} /></svg>);
