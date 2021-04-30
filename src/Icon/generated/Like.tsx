import React from 'react';
import { IconProps } from '../index';
export const Like = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M2 10.68c0-.691.503-1.251 1.135-1.251h2.273V22H3.135C2.508 22 2 21.427 2 20.749V10.68zm11.361-2.508h6.366c1.255 0 2.272 1.126 2.272 2.514 0 .151-.012.301-.037.45l-1.616 9.832C20.25 21.566 19.779 22 19.23 22H7.681V9.429L11.089 0c1.704 0 2.84 1.257 2.84 3.143 0 1.257-.189 2.933-.568 5.029z" fill="#1b1c1d" /></svg>);