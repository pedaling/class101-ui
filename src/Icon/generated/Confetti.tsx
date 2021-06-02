import React from 'react';
import type { IconProps } from '../types';

export const Confetti = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M20.5 14.998a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5zM18 4.999a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1zM3.387 21.92c-.824.343-1.651-.483-1.308-1.308l5-11.998a1 1 0 011.63-.322l6.999 6.999a1 1 0 01-.322 1.63L3.387 21.92zm12.321-11.215a1 1 0 01-1.414-1.414l2-2a1 1 0 011.601.26l.379.759 1.019-1.019a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.601-.26l-.379-.759-1.019 1.019zm-3.707-4.706v1a1 1 0 01-1 1 1 1 0 01-1-1v-2a1 1 0 011-1h1V3a1 1 0 011-1 1 1 0 011 1v2a1 1 0 01-1 1h-1z" fill={fillColor} /></svg>);
