import React from 'react';
import type { IconProps } from '../types';

export const ListNumber = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M1 17h2v.5H2v1h1v.5H1v1h3v-4H1v1zm1-9h1V4H1v1h1v3zm-1 3h1.8L1 13.1v.9h3v-1H2.2L4 10.9V10H1v1zm5-6v2h16V5H6zm0 14h16v-2H6v2zm0-6h16v-2H6v2z" fill={fillColor} /></svg>);
