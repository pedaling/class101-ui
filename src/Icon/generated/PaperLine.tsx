import React from 'react';
import { IconProps } from '../index';
export const PaperLine = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#1b1c1d" style={style} className={className} viewBox="0 0 24 24"><path d="M7 7v2h10V7H7zm10 4H7v2h10v-2zm0 4v2H7v-2h10z" /><path fillRule="evenodd" d="M3 1a1 1 0 00-1 1v20a1 1 0 001 1h18a1 1 0 001-1V2a1 1 0 00-1-1H3zm17 2H4v18h16V3z" /></svg>);