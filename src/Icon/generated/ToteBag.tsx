import React from 'react';
import type { IconProps } from '../types';
export const ToteBag = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M9.171 5a3 3 0 015.659 0H9.171zM7 7v2h2V7h6v2h2V7h3l-2 12H6L4 7h3zm.1-2a5.002 5.002 0 019.8 0H20a2 2 0 011.973 2.329l-2 12A2 2 0 0118 21H6a2 2 0 01-1.973-1.671l-2-12A2 2 0 014 5h3.1z" fill={fillColor} /></svg>);