import React from 'react';
import type { IconProps } from '../types';

export const PlayPrevious = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2a10 10 0 110 20 9.994 9.994 0 01-8.58-4.861l1.71-1.038A7.994 7.994 0 0012 20a8 8 0 100-16 7.97 7.97 0 00-5.135 1.865L9 8H3V2l2.447 2.447A9.96 9.96 0 0112 2zm-.04 14c-1.697 0-2.854-1.022-2.903-2.416h1.508c.092.649.665 1.081 1.405 1.081.838 0 1.416-.562 1.416-1.411 0-.859-.584-1.432-1.411-1.432-.605 0-1.065.265-1.335.703H9.181L9.57 8h4.903v1.357h-3.638l-.173 2.005h.097c.33-.476.881-.762 1.654-.762 1.481 0 2.53 1.087 2.53 2.616 0 1.654-1.195 2.784-2.984 2.784z" fill={fillColor} /></svg>);
