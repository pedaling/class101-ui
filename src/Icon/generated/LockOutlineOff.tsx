import React from 'react';
import type { IconProps } from '../types';

export const LockOutlineOff = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M11 16.732A2 2 0 0112 13a2 2 0 011 3.732V18a1 1 0 11-2 0v-1.268zM8 10h11c.667 0 1 .333 1 1v10c0 .667-.333 1-1 1H5c-.667 0-1-.333-1-1V11c0-.667.333-1 1-1h1V7a6 6 0 1112 0 1 1 0 11-2 0 4 4 0 10-8 0v3zm-2 2v8h12v-8H6z" fill={fillColor} /></svg>);
