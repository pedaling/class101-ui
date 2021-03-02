import React from 'react';
import { IconProps } from '../index';
export const Cart = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.5v12.292c0 .115.093.208.208.208h13.704a.208.208 0 00.203-.163l2.495-11.25a.208.208 0 00-.203-.254H4.583V.625a.208.208 0 00-.208-.208H1.042a.208.208 0 00-.209.208v1.667c0 .115.094.208.209.208H2.5zm14.07 2.917l-1.663 7.5H4.583v-7.5H16.57z" fill="#000" /><path d="M3.333 17.5a1.667 1.667 0 103.334 0 1.667 1.667 0 00-3.334 0zM13.333 19.167a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z" fill="#000" /></svg>);