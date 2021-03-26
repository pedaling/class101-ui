import React from 'react';
import { IconProps } from '../index';
export const PhotoOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M3 2h18c.552 0 1 .423 1 .944v18.112c0 .521-.448.944-1 .944H3c-.552 0-1-.423-1-.944V2.944C2 2.423 2.448 2 3 2zm1 2v16h16V4H4zm5 9.5l2 2.5 3-4 4.5 6h-13L9 13.5z" fill={fillColor} /></svg>);