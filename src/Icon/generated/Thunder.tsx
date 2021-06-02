import React from 'react';
import type { IconProps } from '../types';

export const Thunder = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path d="M18 10a1 1 0 01.774 1.633l-9 11c-.667.815-1.979.178-1.75-.85L9.753 14H6a1 1 0 01-.774-1.633l9-11c.667-.815 1.979-.178 1.75.85L14.247 10H18z" fill={fillColor} /></svg>);
