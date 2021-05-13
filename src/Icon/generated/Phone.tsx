import React from 'react';
import { IconProps } from '../index';
export const Phone = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4.338 11.412a4.571 4.571 0 01-.021-6.442L5.92 3.346a1.15 1.15 0 011.608-.017l3.06 2.968c.458.443.465 1.176.014 1.628l-2.703 2.703 5.546 5.405 2.654-2.6a1.14 1.14 0 011.607.009l2.959 2.959a1.14 1.14 0 01.003 1.613l-1.619 1.628a4.57 4.57 0 01-6.471.009l-8.24-8.24z" fill={fillColor} /></svg>);