import React from 'react';
import type { IconProps } from '../types';

export const EditOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.5 7.914l-8.5 8.5V19h2.586l8.5-8.5L13.5 7.914zM14.914 6.5L17.5 9.086l.793-.793a1.83 1.83 0 000-2.586 1.83 1.83 0 00-2.586 0l-.793.793zM4 21a1 1 0 01-1-1v-4a1 1 0 01.293-.707l11-11a3.83 3.83 0 015.414 0 3.83 3.83 0 010 5.414l-11 11A1 1 0 018 21H4z" fill={fillColor} /></svg>);
