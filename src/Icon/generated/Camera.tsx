import React from 'react';
import { IconProps } from '../index';
export const Camera = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3zm6.2 10c0 2.133-1.067 3.2-3.2 3.2S8.8 15.133 8.8 13 9.867 9.8 12 9.8s3.2 1.067 3.2 3.2zM12 18c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" fill={fillColor} /></svg>);