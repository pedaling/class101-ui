import React from 'react';
import { IconProps } from '../index';
export const Search = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.907 17.059A8.468 8.468 0 0110.5 19a8.5 8.5 0 110-17 8.5 8.5 0 018.5 8.5 8.468 8.468 0 01-1.941 5.407L23 21l-2 2-5.093-5.941zM17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 1113 0z" fill="#1b1c1d" /></svg>);