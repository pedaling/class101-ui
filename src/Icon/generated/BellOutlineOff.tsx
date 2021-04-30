import React from 'react';
import { IconProps } from '../index';
export const BellOutlineOff = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#1b1c1d" style={style} className={className} viewBox="0 0 24 24"><path d="M12 2c-1.827 0-3.51.612-4.857 1.643l1.431 1.431A5.97 5.97 0 0112 4a6 6 0 016 6v4.5l2 2V10a8 8 0 00-8-8z" /><path fillRule="evenodd" d="M21 20.5L19.5 22l-2-2H3v-2.236l1-2V10a7.98 7.98 0 01.558-2.942L2.5 5 4 3.5l17 17zM6.152 8.652A6.02 6.02 0 006 10v6.236L5.118 18H15.5L6.152 8.652z" /><path d="M12 23a2 2 0 01-2-2h4a2 2 0 01-2 2z" /></svg>);