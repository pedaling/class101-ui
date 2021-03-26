import React from 'react';
import { IconProps } from '../index';
export const VideoOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M15.5 12L10 9v6l5.5-3z" fill={fillColor} /><path fillRule="evenodd" clipRule="evenodd" d="M3 3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2H3zm0 16h18V5H3v14z" fill={fillColor} /></svg>);