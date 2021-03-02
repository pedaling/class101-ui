import React from 'react';
import { IconProps } from '../index';
export const PlayPrevious = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.995 9.995 0 01-8.58-4.861L5.13 16.1A8 8 0 106.865 5.865L9 8H3V2l2.447 2.447A9.961 9.961 0 0112 2zm-.04 14c-1.698 0-2.855-1.022-2.903-2.416h1.508c.092.648.665 1.08 1.405 1.08.838 0 1.416-.561 1.416-1.41 0-.86-.583-1.432-1.41-1.432-.606 0-1.065.264-1.336.702H9.181L9.571 8h4.902v1.357h-3.638l-.173 2.005h.097c.33-.476.881-.762 1.655-.762 1.48 0 2.53 1.087 2.53 2.616 0 1.654-1.195 2.784-2.985 2.784z" fill={fillColor} /></svg>);