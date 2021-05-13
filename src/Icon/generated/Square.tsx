import React from 'react';
import { IconProps } from '../index';
export const Square = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 9h5V4H4v5zM2 2.889A.89.89 0 012.889 2h7.222a.89.89 0 01.889.889v7.222a.89.89 0 01-.889.889H2.889A.89.89 0 012 10.111V2.889zM15 9h5V4h-5v5zm-2-6.111A.89.89 0 0113.889 2h7.222a.89.89 0 01.889.889v7.222a.89.89 0 01-.889.889h-7.222a.89.89 0 01-.889-.889V2.889zM9 20H4v-5h5v5zm-6.111-7a.89.89 0 00-.889.889v7.222a.89.89 0 00.889.889h7.222a.89.89 0 00.889-.889v-7.222a.89.89 0 00-.889-.889H2.889zM15 20h5v-5h-5v5zm-2-6.111a.89.89 0 01.889-.889h7.222a.89.89 0 01.889.889v7.222a.89.89 0 01-.889.889h-7.222a.89.89 0 01-.889-.889v-7.222z" fill={fillColor} /></svg>);