import React from 'react';
import type { IconProps } from '../types';
export const VolumeOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M13 4a1 1 0 00-1.555-.832L5.697 7H2a1 1 0 00-1 1v8a1 1 0 001 1h3.697l5.748 3.832A1 1 0 0013 20V4zM3 15h3.2l4.8 3.131V5.869L6.2 9H3v6z" /><path d="M23 12c0-3.432-1.286-6.519-3.321-8.543l-1.576 1.261C19.849 6.346 21 8.988 21 12s-1.151 5.654-2.897 7.282l1.576 1.261C21.714 18.519 23 15.432 23 12zm-4 0c0-2.411-.935-4.588-2.425-6.06l-1.578 1.262C16.207 8.292 17 10.026 17 12s-.793 3.708-2.003 4.798l1.578 1.262C18.065 16.588 19 14.411 19 12z" /></svg>);