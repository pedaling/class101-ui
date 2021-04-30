import React from 'react';
import { IconProps } from '../index';
export const Comment = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M1 12a8 8 0 018-8h6a8 8 0 110 16h-1.5L12 21.5 10.5 20H9a8 8 0 01-8-8zm8 0a1 1 0 11-2 0 1 1 0 112 0zm3 1a1 1 0 100-2 1 1 0 100 2zm5-1a1 1 0 11-2 0 1 1 0 112 0z" fill={fillColor} /></svg>);