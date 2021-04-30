import React from 'react';
import { IconProps } from '../index';
export const Alert = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M21.872 19.51A1 1 0 0121 21H3a1 1 0 01-.872-1.49l9-16a1 1 0 011.743 0l9 16zM13 15V9h-2v6h2zm0 3v-2h-2v2h2z" fill="#1b1c1d" /></svg>);