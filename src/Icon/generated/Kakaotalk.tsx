import React from 'react';
import type { IconProps } from '../types';

export const Kakaotalk = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style,
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={style} className={className} viewBox="0 0 24 24"><path fill={fillColor} fillRule="evenodd" d="M12 4c-4.971 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.27 6.054l-.78 2.94c-.122.489.179.483.377.351l3.463-2.353a11.39 11.39 0 001.67.123c4.971 0 9-3.185 9-7.115S16.971 4 12 4" /></svg>);
