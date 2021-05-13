import React from 'react';
import type { IconProps } from '../types';
export const TextH3 = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path d="M2.5 2h2v9h9V2h2v20h-2v-9h-9v9h-2V2zm17.75 11.5c-1 0-1.496.56-1.5 1.254l-1.5-.008c.009-1.519 1.25-2.746 3-2.746s3 1.232 3 2.751c0 .999-.25 1.766-1 2.249.75.483 1 1.25 1 2.249 0 1.519-1.25 2.751-3 2.751s-2.991-1.227-3-2.746l1.5-.008c.004.694.5 1.254 1.5 1.254.85 0 1.5-.5 1.5-1.45a1.3 1.3 0 00-1.25-1.3H19v-1.5h1.5a1.3 1.3 0 001.25-1.3c0-.95-.65-1.45-1.5-1.45z" /></svg>);