import React from 'react';
import type { IconProps } from '../types';
export const StopPlay = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M6 3h4v18H6V3zm8 0h4v18h-4V3z" /></svg>);