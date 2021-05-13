import React from 'react';
import type { IconProps } from '../types';
export const Facebook = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M20.007 3H3.993A.992.992 0 003 3.993v16.013c0 .549.444.993.993.993h8.621v-6.97h-2.347v-2.716h2.347V9.308c0-2.324 1.42-3.589 3.494-3.589.993 0 1.847.072 2.096.106v2.43h-1.44c-1.125 0-1.344.54-1.344 1.328v1.733h2.689l-.349 2.723h-2.34V21h4.587a.992.992 0 00.993-.993V3.993A.992.992 0 0020.007 3" /></svg>);