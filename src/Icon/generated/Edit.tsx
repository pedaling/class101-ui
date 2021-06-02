import React from 'react';
import type { IconProps } from '../types';

export const Edit = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 21a1 1 0 01-1-1v-4a1 1 0 01.293-.707l11-11a3.83 3.83 0 015.414 0 3.83 3.83 0 010 5.414l-11 11A1 1 0 018 21H4zm1-2h2.586l.707-.707-2.586-2.586-.707.707V19z" fill={fillColor} /></svg>);
