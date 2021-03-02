import React from 'react';
import { IconProps } from '../index';
export const ClearStyle = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M1.5 3L3 1.5 22.5 21 21 22.5l-8-8V20h2v2H9v-2h2v-7.5L4.5 6H3V4.5L1.5 3zM6.5 2l2 2H11v2.5l2 2V4h6v2h2V2H6.5z" fill={fillColor} /></svg>);