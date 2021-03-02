import React from 'react';
import { IconProps } from '../index';
export const Reply = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M2.368 21.632l.594-5.347A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.965 9.965 0 01-4.285-.962l-5.347.594zm2.264-2.264l3.452-.383.268.137A7.96 7.96 0 0012 20a8 8 0 10-8-8c0 1.287.304 2.53.878 3.648l.138.268-.384 3.452zM8 13a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z" fill={fillColor} /></svg>);