import React from 'react';
import type { IconProps } from '../types';

export const CloseCircleOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} fillRule="evenodd" style={style} className={className} viewBox="0 0 24 24"><path d="M17 15.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59zM1 12C1 5.918 5.918 1 12 1s11 4.918 11 11-4.918 11-11 11S1 18.082 1 12zm11-9a8.99 8.99 0 00-9 9 8.99 8.99 0 009 9 8.99 8.99 0 009-9 8.99 8.99 0 00-9-9z" /></svg>);
