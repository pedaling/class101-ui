import React from 'react';
import type { IconProps } from '../types';

export const Contents = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4.889 2h14.222a.9.9 0 01.889.909v18.182a.9.9 0 01-.889.909H4.889A.9.9 0 014 21.091V2.909A.9.9 0 014.889 2zM6 4v6h12V4H6zm0 8v2h12v-2H6zm0 4v2h10v-2H6z" fill={fillColor} /></svg>);
