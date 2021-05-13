import React from 'react';
import type { IconProps } from '../types';
export const CheckboxOn = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path fillRule="evenodd" d="M20 2a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h16zm-9.666 14.684l7.5-7.5L16.659 8l-6.325 6.326-2.992-2.984-1.175 1.175 4.167 4.167z" fill={fillColor} /></svg>);