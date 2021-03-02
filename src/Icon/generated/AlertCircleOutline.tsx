import React from 'react';
import { IconProps } from '../index';
export const AlertCircleOutline = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M13 13.5v-6h-2v6h2zm0 3v-2h-2v2h2z" fill={fillColor} /><path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z" fill={fillColor} /></svg>);