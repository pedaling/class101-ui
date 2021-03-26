import React from 'react';
import { IconProps } from '../index';
export const Gear = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M20.873 18.68l-2.217 2.217-2.838-.79-.811.334L13.55 23h-3.135l-1.449-2.566-.81-.34-2.838.78-2.216-2.216.79-2.838-.334-.811L1 13.55v-3.135l2.568-1.449.34-.81-.781-2.838 2.215-2.215 2.838.791.81-.334L10.446 1h3.136l1.449 2.568.81.34 2.837-.781 2.22 2.215-.791 2.839.334.81L23 10.447v3.136l-2.567 1.448-.34.813.78 2.837zM12 16a4 4 0 110-8 4 4 0 010 8z" fill={fillColor} /></svg>);