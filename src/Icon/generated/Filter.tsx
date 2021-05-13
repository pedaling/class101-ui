import React from 'react';
import { IconProps } from '../index';
export const Filter = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 19h18v-2H3v2zm0-6h18v-2H3v2zm0-8v2h18V5H3z" /><circle cx={8} cy={18} r={2} /><circle cx={8} cy={6} r={2} /><circle cx={16} cy={12} r={2} /></svg>);