import React from 'react';
import type { IconProps } from '../types';

export const DepositPassbook = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M5 13h14V5H5v8zm17.949 6.684A1 1 0 0122 21H2a1 1 0 01-.949-1.316L3 13.838V4a1 1 0 011-1h16a1 1 0 011 1v9.838l1.949 5.846zM19.279 15H4.721l-1.333 4h17.225l-1.333-4zM7 7h10v2H7V7z" fill={fillColor} /></svg>);
