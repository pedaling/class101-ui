import React from 'react';
import { IconProps } from '../index';
export const Person = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M15.557 12.832A8 8 0 0120 20v1H4v-1a8 8 0 014.443-7.168 6 6 0 117.114 0z" fill={fillColor} /></svg>);