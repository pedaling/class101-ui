import React from 'react';
import type { IconProps } from '../types';
export const Sheild = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 18a6.01 6.01 0 01-6-6 6.01 6.01 0 016-6 6.01 6.01 0 016 6 6.01 6.01 0 01-6 6zm.073-16.5h-.147C9.729 3.338 6.549 4.5 3 4.5V12c0 7.524 9 10.5 9 10.5s9-3 9-10.5V4.5c-3.549 0-6.729-1.162-8.926-3zm.426 10.754l.251 1.996h-1.5l.251-1.996a1.124 1.124 0 01-.626-1.004 1.125 1.125 0 012.25 0c0 .441-.257.818-.626 1.004zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 100-9z" fill={fillColor} /></svg>);