import React from 'react';
import { IconProps } from '../index';
export const Naver = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M3 3h18v18H3V3zm10.431 13.117H16.5V7.883h-3.024v4.258l-2.898-4.258H7.5v8.236h3.033v-4.266l2.898 4.265z" /></svg>);