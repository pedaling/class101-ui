import React from 'react';
import type { IconProps } from '../types';
export const Video = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M2 18a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12zm13.5-6L10 9v6l5.5-3z" fill={fillColor} /></svg>);