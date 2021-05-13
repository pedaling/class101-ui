import React from 'react';
import type { IconProps } from '../types';
export const PhotoDoubleOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path d="M18 22c.552 0 1-.423 1-.944V20H4V5H3c-.552 0-1 .423-1 .944v15.111c0 .522.448.944 1 .944h15z" /><path fillRule="evenodd" d="M7 2h14c.552 0 1 .423 1 .944v14.111c0 .522-.448.944-1 .944H7c-.552 0-1-.423-1-.944V2.944C6 2.423 6.448 2 7 2zm1 2v12h12V4H8zm4 7l1 1 2-2.5 3.5 4.5h-9l2.5-3z" /></svg>);