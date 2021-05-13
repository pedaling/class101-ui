import React from 'react';
import type { IconProps } from '../types';
export const Bookmark = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M17 5H7.009c.001 0-.001 4.322-.007 12.966L12 15.824l5 2.143V5zm0-2c1.1 0 2 .9 2 2v16l-7-3-7 3 .01-16c0-1.1.89-2 1.99-2h10z" fill={fillColor} /></svg>);