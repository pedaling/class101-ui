import React from 'react';
import type { IconProps } from '../types';
export const Gear = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M20.873 18.68l-2.217 2.217-2.838-.79-.812.335L13.549 23h-3.134l-1.449-2.566-.811-.34-2.838.781-2.216-2.216.791-2.838-.335-.812L1 13.55v-3.134l2.568-1.449.34-.811-.781-2.838 2.215-2.215 2.838.792.811-.334L10.445 1h3.135l1.449 2.568.811.34 2.837-.781 2.219 2.216-.791 2.838.335.811L23 10.446v3.135l-2.567 1.449-.34.813.781 2.837zM12 16a4 4 0 110-8 4 4 0 110 8z" fill={fillColor} /></svg>);