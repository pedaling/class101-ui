import React from 'react';
import type { IconProps } from '../types';

export const TalkHelp = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M23 12a10.95 10.95 0 01-1.795 6.025L22 22l-3.975-.795A10.95 10.95 0 0112 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-10 6v-2h-2v2h2zM12 6a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .879-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.705-1.712 1.432-2.347l.009-.008C15.21 11.973 16 11.283 16 10a4 4 0 00-4-4z" fill={fillColor} /></svg>);
