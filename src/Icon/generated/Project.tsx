import React from 'react';
import { IconProps } from '../index';
export const Project = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.382 15h-7.381v-1h3a1 1 0 001-1V9h3.381l-1.276 2.552a1 1 0 000 .895L19.382 15zM4.692 6h9.309v6H6.026L4.692 6zm15.427 6l1.776-3.553A1 1 0 0021.001 7h-5V5a1 1 0 00-1-1H4.248l-.271-1.217a1.005 1.005 0 00-1.193-.76 1 1 0 00-.76 1.194l4 18A1 1 0 007 22a1.01 1.01 0 00.217-.024 1 1 0 00.76-1.193L6.47 14h3.531v2a1 1 0 001 1h10a1 1 0 00.894-1.448L20.119 12z" fill="#1b1c1d" /></svg>);