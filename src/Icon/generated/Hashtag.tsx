import React from 'react';
import { IconProps } from '../index';
export const Hashtag = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  accentColor = '#DDE0E2',
  className,
  style
}) => <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M9.691 9l-1.333 6h5.95l1.334-6h-5.95zm.444-2h5.952l.937-4.217a1 1 0 011.952.434L18.136 7H21a1 1 0 110 2h-3.309l-1.333 6H19.5a1 1 0 110 2h-3.587l-.937 4.217a1 1 0 11-1.952-.434l.84-3.783h-5.95l-.938 4.217a1 1 0 01-1.952-.434L5.864 17H3a1 1 0 110-2h3.309l1.333-6H4.5a1 1 0 010-2h3.587l.937-4.217a1 1 0 011.952.434L10.136 7z" fill={fillColor} /></svg>);