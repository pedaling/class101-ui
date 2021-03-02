import React from 'react';
import { IconProps } from '../index';
export const BellOutlineOff = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path d="M12 2c-1.827 0-3.51.612-4.857 1.643l1.43 1.43A6 6 0 0118 10v4.501l2.001 2V10a8 8 0 00-8-8z" fill={fillColor} /><path fillRule="evenodd" clipRule="evenodd" d="M21 20.5L19.5 22l-2-2H3v-2.236l1-2V10c0-1.039.198-2.031.558-2.942L2.5 5 4 3.5l17 17zM6.152 8.652C6.052 9.085 6 9.537 6 10v6.236L5.118 18H15.5L6.152 8.652z" fill={fillColor} /><path d="M12 23a2 2 0 01-2-2h4a2 2 0 01-2 2z" fill={fillColor} /></svg>);