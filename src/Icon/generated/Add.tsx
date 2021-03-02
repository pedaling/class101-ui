import React from 'react';
import { IconProps } from '../index';
export const Add = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={fillColor} /></svg>);