import React from 'react';
import type { IconProps } from '../types';
export const Clip = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M17.293 4.707a2.536 2.536 0 00-3.586 0l-7.75 7.75a4.303 4.303 0 106.086 6.086l8.25-8.25 1.414 1.414-8.25 8.25a6.303 6.303 0 01-8.914-8.914l7.75-7.75a4.536 4.536 0 016.414 6.414l-7.25 7.25a2.77 2.77 0 01-3.914 0 2.77 2.77 0 010-3.914l6.75-6.75 1.414 1.414-6.75 6.75a.77.77 0 000 1.086.77.77 0 001.086 0l7.25-7.25c.99-.99.99-2.596 0-3.586z" fill={fillColor} /></svg>);