import React from 'react';
import { IconProps } from '../index';
export const Lock = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M6 10V7a6 6 0 1112 0v3h1c.667 0 1 .333 1 1v10c0 .667-.333 1-1 1H5c-.667 0-1-.333-1-1V11c0-.667.333-1 1-1h1zm2 0h8V7a4 4 0 10-8 0v3zm3 6.732V18a1 1 0 102 0v-1.268A2 2 0 0012 13a2 2 0 00-1 3.732z" fill={fillColor} /></svg>);