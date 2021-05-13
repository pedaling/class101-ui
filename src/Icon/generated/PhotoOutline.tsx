import React from 'react';
import type { IconProps } from '../types';
export const PhotoOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 2h18c.552 0 1 .423 1 .944v18.111c0 .522-.448.944-1 .944H3c-.552 0-1-.423-1-.944V2.944C2 2.423 2.448 2 3 2zm1 2v16h16V4H4zm5 9.5l2 2.5 3-4 4.5 6h-13L9 13.5z" fill={fillColor} /></svg>);