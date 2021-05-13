import React from 'react';
import type { IconProps } from '../types';
export const Replay = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M17.02 6L12 11V7c-3.84.021-6.979 3.16-7 7a7.01 7.01 0 007 7c3.847-.014 7.006-3.153 7.02-7H21c-.021 4.943-4.057 8.979-9 9-4.929.021-9.028-4.064-9-9s4.064-8.972 9-9V1l5.02 5z" fill={fillColor} /></svg>);