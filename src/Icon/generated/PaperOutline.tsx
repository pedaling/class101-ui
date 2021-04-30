import React from 'react';
import { IconProps } from '../index';
export const PaperOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4.01 4c0-1.1.89-2 1.99-2h8l6 6v12c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20l.01-16zM6 4v16h12V10h-6V4H6z" fill={fillColor} /></svg>);