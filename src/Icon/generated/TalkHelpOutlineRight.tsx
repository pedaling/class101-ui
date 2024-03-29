import React from 'react';
import type { IconProps } from '../types';

export const TalkHelpOutlineRight = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} fillRule="evenodd" style={style} className={className} viewBox="0 0 24 24"><path d="M19.083 17.613l.45-.685A8.95 8.95 0 0021 12a9 9 0 10-9 9 8.95 8.95 0 004.928-1.468l.685-.45 1.837.368-.368-1.837zM22 22l-3.975-.795A10.95 10.95 0 0112 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a10.95 10.95 0 01-1.795 6.025L22 22zm-9-4v-2h-2v2h2zM12 6a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .879-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.705-1.712 1.432-2.347l.009-.008C15.21 11.973 16 11.283 16 10a4 4 0 00-4-4z" /></svg>);
