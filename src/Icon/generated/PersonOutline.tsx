import React from 'react';
import { IconProps } from '../index';
export const PersonOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M8.443 12.832a6 6 0 117.114 0A8 8 0 0120 20v1h-2v-1a6 6 0 00-12 0v1H4v-1a8 8 0 014.443-7.168zM16 8a4 4 0 11-8 0 4 4 0 018 0z" fill={fillColor} /></svg>);