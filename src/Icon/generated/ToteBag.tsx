import React from 'react';
import { IconProps } from '../index';
export const ToteBag = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M9.17 5a3.001 3.001 0 015.66 0H9.17zM7 7v2h2V7h6v2h2V7h3l-2 12H6L4 7h3zm.1-2a5.002 5.002 0 019.8 0H20a2 2 0 011.973 2.329l-2 12A2 2 0 0118 21H6a2 2 0 01-1.973-1.671l-2-12A2 2 0 014 5h3.1z" fill={fillColor} /></svg>);