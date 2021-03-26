import React from 'react';
import { IconProps } from '../index';
export const ChevronUp = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M18.5 15.5l-6.5-6-6.5 6L4 14l8-7.5 8 7.5-1.5 1.5z" fill={fillColor} /></svg>);