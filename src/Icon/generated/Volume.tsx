import React from 'react';
import { IconProps } from '../index';
export const Volume = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M13 4a1 1 0 00-1.555-.832L5.697 7H2a1 1 0 00-1 1v8a1 1 0 001 1h3.697l5.748 3.832A1 1 0 0013 20V4z" fill={fillColor} /><path d="M23 12c0-3.432-1.286-6.52-3.32-8.543l-1.577 1.26C19.85 6.347 21 8.987 21 12c0 3.012-1.151 5.654-2.897 7.282l1.576 1.261C21.714 18.52 23 15.432 23 12z" fill={fillColor} /><path d="M19 12c0-2.41-.935-4.588-2.425-6.06l-1.578 1.262C16.207 8.292 17 10.026 17 12c0 1.974-.793 3.708-2.003 4.798l1.578 1.262C18.065 16.588 19 14.41 19 12z" fill={fillColor} /></svg>);