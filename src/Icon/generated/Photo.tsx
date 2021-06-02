import React from 'react';
import type { IconProps } from '../types';

export const Photo = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm5.5 11.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z" fill={fillColor} /></svg>);
