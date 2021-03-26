import React from 'react';
import { IconProps } from '../index';
export const MessageOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm3.514 2.143L12 10.833l4.485-2.69a1 1 0 011.03 1.714l-5 3a1 1 0 01-1.03 0l-5-3a1 1 0 111.03-1.714z" fill={fillColor} /></svg>);