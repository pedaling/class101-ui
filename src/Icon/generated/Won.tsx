import React from 'react';
import type { IconProps } from '../types';

export const Won = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 5h2.5l1.136 5h2.727L10.5 5h3l1.136 5h2.727L18.5 5H21l-1.071 5H22v2h-2.5L18 19h-4l-1.75-7h-.5L10 19H6l-1.5-7H2v-2h2.071L3 5zm4.091 7L8 16l.909-4H7.091zm8 0L16 16l.909-4h-1.818z" fill={fillColor} /></svg>);
