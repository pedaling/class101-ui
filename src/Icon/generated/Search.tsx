import React from 'react';
import { IconProps } from '../index';
export const Search = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M15.907 17.059a8.5 8.5 0 111.151-1.151L23 21l-2 2-5.093-5.941zM17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" fill={fillColor} /></svg>);