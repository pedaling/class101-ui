import React from 'react';
import { IconProps } from '../index';
export const Notice = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M17 15V4.766l-3.485 2.091A1 1 0 0113 7h-1v8h1a1 1 0 01.515.143L17 17.234V15zm2-7.874a4.002 4.002 0 010 7.748V19a1 1 0 01-1.515.858L12.723 17H12v5a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.341A6.003 6.003 0 012 11a6 6 0 016-6h4.723l4.762-2.857A1 1 0 0119 3v4.126zm0 2.142v3.465a2 2 0 000-3.465zM8 17v4h2v-4H8zm2-2V7H8a4 4 0 000 8h2z" fill={fillColor} /></svg>);