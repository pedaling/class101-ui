import React from 'react';
import { IconProps } from '../index';
export const Repeat = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M22 13v-2h-2v2a5 5 0 01-5 5H8v-1.5a.5.5 0 00-.82-.384l-3 2.5a.5.5 0 000 .768l3 2.5A.5.5 0 008 21.5V20h7a7 7 0 007-7zM2 11v2h2v-2a5 5 0 015-5h7v1.5a.5.5 0 00.82.384l3-2.5a.5.5 0 000-.768l-3-2.5A.5.5 0 0016 2.5V4H9a7 7 0 00-7 7z" fill={fillColor} /></svg>);