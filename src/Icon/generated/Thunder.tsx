import React from 'react';
import { IconProps } from '../index';
export const Thunder = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M18 10a1 1 0 01.774 1.633l-9 11c-.667.816-1.979.178-1.75-.85L9.754 14H6a1 1 0 01-.774-1.633l9-11c.667-.816 1.979-.178 1.75.85L14.246 10H18z" fill={fillColor} /></svg>);