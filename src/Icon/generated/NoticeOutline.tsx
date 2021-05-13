import React from 'react';
import { IconProps } from '../index';
export const NoticeOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 11a4.002 4.002 0 00-3-3.874V3a1 1 0 00-1.515-.858L12.723 5H8a6 6 0 00-6 6 6.001 6.001 0 005 5.917V20a1 1 0 001 1h2a1 1 0 001-1v-3h1.723l4.762 2.858A1 1 0 0019 19v-4.126c1.725-.444 3-2.01 3-3.874zM7.984 15H13a1 1 0 01.515.143L17 17.234V4.766l-3.485 2.091A1 1 0 0113 7H8a4 4 0 10-.016 8zM20 11a2 2 0 01-1 1.732V9.268A2 2 0 0120 11z" fill={fillColor} /></svg>);