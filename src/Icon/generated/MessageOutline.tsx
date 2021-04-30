import React from 'react';
import { IconProps } from '../index';
export const MessageOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm3.515 2.143L12 10.834l4.485-2.691a1 1 0 011.029 1.715l-5 3a1 1 0 01-1.029 0l-5-3a1 1 0 111.029-1.715z" fill={fillColor} /></svg>);