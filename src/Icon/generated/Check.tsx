import React from 'react';
import { IconProps } from '../index';
export const Check = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M10 18l-6-6 1.5-1.5L10 15l9-9 1.5 1.5L10 18z" fill={fillColor} /></svg>);